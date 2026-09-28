export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800');

  const source = 'https://global.oliveyoung.com/';
  try {
    const response = await fetch(source, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; KoreaEasy/1.0; +https://www.phoenix-uos.com/)'
      }
    });
    if (!response.ok) throw new Error('Olive Young source unavailable');

    const html = await response.text();
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, ' ')
      .trim();

    const candidates = [
      { key:'notification', regex:/(Turn on Notification.{0,120}?Get\s+(?:US\$|\$|£|€)\s*\d+(?:\.\d+)?\s*Off)/i },
      { key:'app', regex:/(Download the App.{0,120}?Unlock\s+(?:US\$|\$|£|€)\s*\d+(?:\.\d+)?\s*Benefit)/i },
      { key:'first', regex:/(First Purchase Only.{0,180}?(?:30%\+25%|25%.*?30%|30%.*?25%).{0,100}?Coupons?)/i },
      { key:'upto', regex:/(Up to\s+\d+%\s*OFF.{0,100}?(?:Extra Coupons|Free Gift|Coupons|Gift)?)/i },
      { key:'gift', regex:/((?:Extra Coupons|More Coupons).{0,80}?(?:Free Gift|Gifts?))/i }
    ];

    const deals = [];
    for (const c of candidates) {
      const m = text.match(c.regex);
      if (m && !deals.some(d => d.text === m[1])) {
        deals.push({ id:c.key, text:m[1].trim(), url:source });
      }
    }

    res.status(200).json({
      ok: true,
      provider: 'OLIVE YOUNG Global',
      source,
      checkedAt: new Date().toISOString(),
      deals: deals.slice(0, 5)
    });
  } catch (error) {
    res.status(200).json({
      ok: false,
      provider: 'OLIVE YOUNG Global',
      source,
      checkedAt: new Date().toISOString(),
      deals: [],
      message: 'Live deals are temporarily unavailable. Please check the official Olive Young page.'
    });
  }
}