export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=900');

  if (req.method !== 'GET') return res.status(405).json({ ok:false, message:'Method not allowed' });

  const lng = Number(req.query.lng);
  const lat = Number(req.query.lat);
  if (!Number.isFinite(lng) || !Number.isFinite(lat)) {
    return res.status(400).json({ ok:false, message:'lng and lat are required' });
  }

  const browserKey = String(req.headers['x-vworld-key'] || '').trim();
  const key = browserKey || process.env.VWORLD_API_KEY || process.env.VWORLD_KEY;
  if (!key) {
    return res.status(200).json({
      ok:false,
      code:'VWORLD_KEY_MISSING',
      configured:false,
      message:'VWorld API key is not configured on the server.'
    });
  }

  const configuredDomain = process.env.VWORLD_DOMAIN || 'estate.phoenix-uos.com';
  const base = 'https://api.vworld.kr';
  const domainCandidates = Array.from(new Set([
    configuredDomain,
    'estate.phoenix-uos.com',
    'https://estate.phoenix-uos.com',
    'https://estate.phoenix-uos.com/'
  ].filter(Boolean)));

  async function getJson(url) {
    const r = await fetch(url, {
      headers:{
        'User-Agent':'MeridianProperties/1.0 (+https://estate.phoenix-uos.com)',
        'Accept':'application/json'
      }
    });
    const txt = await r.text();
    let data;
    try { data = JSON.parse(txt); }
    catch { throw new Error('Invalid JSON from VWorld: '+txt.slice(0,180)); }
    if (!r.ok) throw new Error('VWorld HTTP '+r.status+': '+txt.slice(0,180));
    return data;
  }

  function upstreamError(data) {
    if (!data || typeof data !== 'object') return null;
    const status = data?.response?.status;
    const err = data?.response?.error || data?.error;
    if (status === 'ERROR' || err) {
      const code = err?.code || data?.response?.resultCode || data?.resultCode || 'VWORLD_ERROR';
      const text = err?.text || err?.message || data?.response?.resultMsg || data?.resultMsg || status || 'VWorld request failed';
      return { code:String(code), text:String(text) };
    }
    return null;
  }

  async function requestWithDomain(urlObj, allowNoDomain=true) {
    const attempts = [];
    for (const d of domainCandidates) attempts.push(d);
    if (allowNoDomain) attempts.push('');
    let last = null;
    for (const d of attempts) {
      const u = new URL(urlObj.toString());
      if (d) u.searchParams.set('domain', d); else u.searchParams.delete('domain');
      try {
        const data = await getJson(u.toString());
        const err = upstreamError(data);
        if (!err) return { data, domain:d || '(none)' };
        last = { domain:d || '(none)', error:err };
      } catch (e) {
        last = { domain:d || '(none)', error:{ code:'FETCH_ERROR', text:e?.message || String(e) } };
      }
    }
    const e = new Error(last?.error?.text || 'VWorld request failed');
    e.vworld = last;
    throw e;
  }

  function pickFeature(data) {
    const fc = data?.response?.result?.featureCollection || data?.featureCollection || data;
    const arr = fc?.features;
    return Array.isArray(arr) && arr.length ? arr[0] : null;
  }

  function findRecords(node, out=[]) {
    if (!node || typeof node !== 'object') return out;
    if (Array.isArray(node)) {
      for (const v of node) findRecords(v,out);
      return out;
    }
    if ('pnu' in node || 'PNU' in node || 'lndpclAr' in node || 'pblntfPclnd' in node || 'stdrYear' in node) out.push(node);
    for (const v of Object.values(node)) findRecords(v,out);
    return out;
  }

  function chooseRecord(data) {
    const recs = findRecords(data,[]);
    return recs.find(x => x.lndpclAr || x.pblntfPclnd || x.stdrYear || x.pnu || x.PNU) || null;
  }

  async function fetchWithYear(path, pnu) {
    const now = new Date().getFullYear();
    for (let y=now; y>=now-4; y--) {
      const u = new URL(base + path);
      u.searchParams.set('key', key);
      u.searchParams.set('pnu', pnu);
      u.searchParams.set('stdrYear', String(y));
      u.searchParams.set('format', 'json');
      u.searchParams.set('numOfRows', '10');
      u.searchParams.set('pageNo', '1');
      try {
        const wrapped = await requestWithDomain(u, true);
        const data = wrapped.data;
        const total = Number(data?.response?.totalCount ?? data?.totalCount ?? 0);
        const rec = chooseRecord(data);
        if (rec && (total > 0 || Object.keys(rec).length)) return { year:y, record:rec, raw:data };
      } catch {}
    }
    return null;
  }

  function pnuFromAddressResult(addressData) {
    const r = addressData?.response?.result?.find?.(x => String(x.type || '').toLowerCase() === 'parcel')
      || addressData?.response?.result?.[0];
    const s = r?.structure || {};
    const ld = String(s.level4LC || '').replace(/\D/g,'');
    const jibun = String(s.level5 || '').trim();
    if (ld.length !== 10 || !jibun) return null;
    const mountain = /^산\s*/.test(jibun) ? '1' : '0';
    const cleaned = jibun.replace(/^산\s*/,'').trim();
    const parts = cleaned.split('-');
    const main = String(parseInt(parts[0] || '0',10) || 0).padStart(4,'0');
    const sub = String(parseInt(parts[1] || '0',10) || 0).padStart(4,'0');
    return ld + mountain + main + sub;
  }

  try {
    // Reverse-geocode first. This lets us derive PNU even if the 2D parcel layer
    // is not enabled for the key.
    const addressUrl = new URL(base + '/req/address');
    addressUrl.searchParams.set('service','address');
    addressUrl.searchParams.set('request','getAddress');
    addressUrl.searchParams.set('version','2.0');
    addressUrl.searchParams.set('crs','EPSG:4326');
    addressUrl.searchParams.set('point',lng+','+lat);
    addressUrl.searchParams.set('format','json');
    addressUrl.searchParams.set('type','PARCEL');
    addressUrl.searchParams.set('zipcode','true');
    addressUrl.searchParams.set('simple','false');
    addressUrl.searchParams.set('key',key);

    let addressData = null;
    try {
      addressData = (await requestWithDomain(addressUrl, true)).data;
    } catch {}

    const parcelUrl = new URL(base + '/req/data');
    parcelUrl.searchParams.set('service','data');
    parcelUrl.searchParams.set('request','GetFeature');
    parcelUrl.searchParams.set('data','LP_PA_CBND_BUBUN');
    parcelUrl.searchParams.set('key',key);
    parcelUrl.searchParams.set('geomFilter',`POINT(${lng} ${lat})`);
    parcelUrl.searchParams.set('crs','EPSG:4326');
    parcelUrl.searchParams.set('size','1');
    parcelUrl.searchParams.set('page','1');
    parcelUrl.searchParams.set('format','json');

    let feature = null, props = {}, parcelLayerError = null;
    try {
      const parcelWrapped = await requestWithDomain(parcelUrl, false);
      const parcelData = parcelWrapped.data;
      feature = pickFeature(parcelData);
      props = feature?.properties || {};
    } catch (e) {
      parcelLayerError = e?.vworld?.error || { code:'PARCEL_LAYER_ERROR', text:e?.message || 'Parcel layer lookup failed' };
    }

    let pnu = String(props.pnu || props.PNU || props.pnu_cd || props.PNU_CD || '');
    if (!pnu || pnu.length !== 19) pnu = pnuFromAddressResult(addressData) || '';

    if (!pnu || pnu.length !== 19) {
      return res.status(200).json({
        ok:false,
        code:parcelLayerError?.code || 'PNU_NOT_FOUND',
        configured:true,
        message:parcelLayerError?.text || 'Could not derive parcel PNU from the selected point.'
      });
    }

    const characteristics = await fetchWithYear('/ned/data/getLandCharacteristics', pnu);
    if (!characteristics?.record) {
      return res.status(200).json({
        ok:false,
        code:'NED_NO_DATA',
        configured:true,
        stage:'land-characteristics',
        message:'토지특성/공시지가 데이터를 조회하지 못했습니다. VWorld 인증키의 활용 API에서 국가중점데이터 API가 허용되어 있는지 확인해 주세요.',
        pnu,
        address:addressData?.response?.result?.[0]?.text || ''
      });
    }

    const ch = characteristics.record || {};
    const addr = addressData?.response?.result?.[0]?.text || props.addr || props.full_nm || '';
    const area = Number(ch.lndpclAr ?? ch.lndpcl_ar ?? props.lndpclAr ?? props.area ?? 0) || null;
    const officialPrice = Number(ch.pblntfPclnd ?? ch.pblntf_pclnd ?? 0) || null;
    const officialYear = Number(ch.stdrYear ?? characteristics?.year ?? 0) || null;
    const landCategory = ch.lndcgrCodeNm || ch.lndcgrNm || ch.jimok || props.jimok || '';
    const zoning = ch.prposArea1Nm || ch.prposAreaNm || ch.useAreaNm || '';
    const useSituation = ch.ladUseSittnNm || ch.landUseNm || '';
    const totalOfficialValue = area && officialPrice ? area * officialPrice : null;

    return res.status(200).json({
      ok:true,
      configured:true,
      provider:'VWorld / MOLIT',
      checkedAt:new Date().toISOString(),
      parcel:{
        pnu,
        address:addr,
        area,
        landCategory,
        zoning,
        useSituation,
        officialPricePerSqm:officialPrice,
        officialPriceYear:officialYear,
        totalOfficialValue,
        geometry:feature?.geometry || null
      }
    });
  } catch (error) {
    return res.status(200).json({
      ok:false,
      configured:true,
      code:error?.vworld?.error?.code || 'VWORLD_ERROR',
      message:error?.vworld?.error?.text || error?.message || 'Parcel lookup failed',
      triedDomain:error?.vworld?.domain || null
    });
  }
}
