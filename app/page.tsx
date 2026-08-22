"use client";

/** Living Infrastructure: ecological editorialism with accessible KR / JA / ES localization. */
import { useEffect, useState } from "react";

const asset = {
  mark: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663873176403/JQEkGcJDqtfYTckw.png",
  pilot: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663873176403/rCAuoqmlyaIbIlgs.jpg",
  data: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663873176403/EmQVwsHVwwhmRFba.jpg",
  ecology: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663873176403/oaMbAekzGpYbGvXd.jpg",
  video: "/phoenix-ecosystem-loop.mp4",
};

const content = {
  ko: {
    code: "KO", languageName: "한국어", homeAria: "Phoenix UOS 홈", navAria: "주요 메뉴", menuOpen: "메뉴 닫기", menuClosed: "메뉴 열기", languageAria: "언어 선택",
    nav: ["비전", "핵심 시스템", "20 Homes Pilot", "수익모델", "Global"], contactNav: "프로젝트 문의",
    heroEyebrow: "REGENERATE EMPTY HOMES", heroTitle: ["빈집을 다시", "살아있는 생태계로"], heroDescription: ["Phoenix UOS는 방치된 빈집을 친환경 주거, 분산형 에너지, 생태 회복, AI 운영 데이터가 결합된 ", "지역 자산", "으로 전환하는 통합 플랫폼입니다."], pilotButton: "20채 시범사업 보기", systemButton: "생태계 구조 보기",
    signalPilot: "1차 Pilot Target", statOne: "1차 Pilot Target", statTwo: "주거 · 에너지 · 생태 · AI", statThree: "통합 운영 데이터", scroll: "SCROLL TO REGENERATE",
    visionTitle: ["빈집은 비용이 아니라", "새로운 지역 자산입니다."], visionBody: "Phoenix UOS는 노후 빈집을 단순 리모델링하는 사업이 아닙니다. 주거·재생에너지·생태·데이터를 하나의 운영체계로 연결합니다.", visionLink: "시스템의 연결 구조",
    systemsTitle: ["4개의 시스템,", "하나의 플랫폼"], systemsIntro: ["개별 기술을 더하는 것이 아니라, 서로의 효율을 높이는 ", "지역 단위 운영 구조", "를 만듭니다."],
    systemItems: [["빈집 재생", "지역의 방치된 주택을 친환경·고효율 생활 공간으로 다시 설계합니다."], ["분산형 에너지", "태양광과 에너지 저장·관리 구조를 통해 건물 단위의 자립도를 높입니다."], ["생태 회복", "녹지·물·토양·생물 다양성을 건축의 경계 바깥까지 함께 되돌립니다."], ["AI 운영", "생산과 사용, 운영 데이터를 축적해 다음 리노베이션의 효율을 개선합니다."]],
    pilotTitle: ["20채에서 검증하고,", "도시 단위로 확장합니다."], pilotCopy: "실제 빈집을 대상으로 에너지 생산량, 생태 회복 효과, 소유주 만족도, 운영 수익 데이터를 확보하는 초기 실증 모델입니다.", pilotSteps: ["빈집 발굴 및 진단", "친환경 리노베이션", "에너지·AI 시스템 설치", "운영 데이터 축적"], pilotAlt: "태양광 지붕과 빗물 정원을 갖춘 재생 주택",
    modelTitle: ["재생 이후에도", "지속되는 운영 수익 구조"], modelBody: "개발 수익에만 의존하지 않고 주거 운영, 에너지, 데이터 기반 관리, 지역 협력 사업으로 확장할 수 있는 구조를 지향합니다.",
    globalTitle: ["지역마다 다른 문제를,", "하나의 운영 언어로"], globalBody: "국내 실증 데이터를 기반으로 각 국가의 주거·에너지 환경에 맞춘 지역형 모델로 확장합니다.", regions: ["한국", "일본", "유럽", "동남아시아", "MENA"], ecologyAlt: "재생 주택 주변의 빗물 정원과 토종 식생",
    contactTitle: ["빈집을 다시", "지역의 미래로"], contactBody: "지자체, 소유주, 에너지 기업, 투자자, 연구기관과의 실증 및 사업 협력을 준비합니다.", contactButton: "프로젝트 문의하기", backTop: "처음으로",
  },
  en: {
    code: "EN", languageName: "English", homeAria: "Phoenix UOS home", navAria: "Primary navigation", menuOpen: "Close menu", menuClosed: "Open menu", languageAria: "Select language",
    nav: ["Vision", "Core systems", "20 Homes Pilot", "Model", "Global"], contactNav: "Project inquiry",
    heroEyebrow: "REGENERATE EMPTY HOMES", heroTitle: ["Bring empty homes back", "into living ecosystems"], heroDescription: ["Phoenix UOS is an integrated platform that turns neglected homes into ", "local assets", "—combining sustainable living, distributed energy, ecological recovery, and AI operations data."], pilotButton: "View the 20-home pilot", systemButton: "Explore the ecosystem",
    signalPilot: "First pilot target", statOne: "First pilot target", statTwo: "Housing · Energy · Ecology · AI", statThree: "Integrated operations data", scroll: "SCROLL TO REGENERATE",
    visionTitle: ["An empty home is not a cost.", "It is a new local asset."], visionBody: "Phoenix UOS is more than renovation. It links housing, renewable energy, ecology, and data into one operating system.", visionLink: "See how the systems connect",
    systemsTitle: ["Four systems,", "one platform"], systemsIntro: ["We do not simply stack technologies. We build a ", "place-based operating structure", " in which every system improves the next."],
    systemItems: [["Home regeneration", "We redesign neglected houses as sustainable, high-efficiency places to live."], ["Distributed energy", "Solar generation, storage, and energy management strengthen building-level autonomy."], ["Ecological recovery", "We restore vegetation, water, soil, and biodiversity beyond the edge of the building."], ["AI operations", "We learn from production, usage, and operations data to improve each future renovation."]],
    pilotTitle: ["Validate with 20 homes,", "then scale citywide."], pilotCopy: "An initial field model that collects real data on energy generation, ecological recovery, owner satisfaction, and operating revenue.", pilotSteps: ["Identify and assess homes", "Deliver sustainable renovation", "Install energy and AI systems", "Build the operations dataset"], pilotAlt: "A regenerated home with a solar roof and rain garden",
    modelTitle: ["Beyond renovation,", "a durable operating model"], modelBody: "We aim for a structure that can extend beyond development revenue into residential operations, energy, data-driven management, and local partnerships.",
    globalTitle: ["Different places,", "one operating language"], globalBody: "Starting with pilot data in Korea, we will adapt a local model to the housing and energy conditions of each region.", regions: ["Korea", "Japan", "Europe", "Southeast Asia", "MENA"], ecologyAlt: "Rain garden and native planting beside a regenerated home",
    contactTitle: ["Bring empty homes", "back to local futures"], contactBody: "We are preparing pilots and operating partnerships with municipalities, owners, energy companies, investors, and research institutions.", contactButton: "Talk about a project", backTop: "Back to top",
  },
  ja: {
    code: "JA", languageName: "日本語", homeAria: "Phoenix UOS ホーム", navAria: "メインメニュー", menuOpen: "メニューを閉じる", menuClosed: "メニューを開く", languageAria: "言語を選択",
    nav: ["ビジョン", "コアシステム", "20 Homes Pilot", "収益モデル", "Global"], contactNav: "プロジェクト相談",
    heroEyebrow: "REGENERATE EMPTY HOMES", heroTitle: ["空き家をもう一度", "息づく生態系へ"], heroDescription: ["Phoenix UOSは、放置された空き家を、環境配慮型の住まい・分散型エネルギー・生態系の回復・AI運用データが結びつく ", "地域資産", "へと転換する統合プラットフォームです。"], pilotButton: "20棟の実証事業を見る", systemButton: "生態系の仕組みを見る",
    signalPilot: "第1次パイロット目標", statOne: "第1次パイロット目標", statTwo: "住まい · エネルギー · 生態 · AI", statThree: "統合運用データ", scroll: "SCROLL TO REGENERATE",
    visionTitle: ["空き家はコストではなく、", "新しい地域資産です。"], visionBody: "Phoenix UOSは、老朽化した空き家を単に改修する事業ではありません。住まい・再生可能エネルギー・生態・データを一つの運用システムとして結びます。", visionLink: "システムのつながりを見る",
    systemsTitle: ["4つのシステム、", "1つのプラットフォーム"], systemsIntro: ["個別技術を足し合わせるのではなく、互いの効率を高める ", "地域単位の運用構造", "をつくります。"],
    systemItems: [["空き家再生", "地域に残された住宅を、環境配慮型で高効率な生活空間へ再設計します。"], ["分散型エネルギー", "太陽光と蓄電・エネルギー管理により、建物単位の自立性を高めます。"], ["生態系の回復", "緑・水・土壌・生物多様性を、建築の境界の外側まで回復させます。"], ["AI運用", "生産・利用・運用データを蓄積し、次の改修効率を高めます。"]],
    pilotTitle: ["20棟で検証し、", "都市単位へ拡張します。"], pilotCopy: "実際の空き家を対象に、エネルギー生産量・生態回復効果・所有者満足度・運用収益のデータを得る初期実証モデルです。", pilotSteps: ["空き家の発掘・診断", "環境配慮型リノベーション", "エネルギー・AIシステムの導入", "運用データの蓄積"], pilotAlt: "太陽光の屋根と雨水庭園を備えた再生住宅",
    modelTitle: ["再生の後にも", "続く運用収益の仕組み"], modelBody: "開発収益だけに依存せず、住まいの運用・エネルギー・データ型管理・地域協働事業へ広がる構造を目指します。",
    globalTitle: ["地域ごとに異なる課題を、", "1つの運用言語で"], globalBody: "韓国での実証データを基盤に、各国の住まい・エネルギー環境に合わせた地域型モデルへ拡張します。", regions: ["韓国", "日本", "ヨーロッパ", "東南アジア", "MENA"], ecologyAlt: "再生住宅を囲む雨水庭園と在来植生",
    contactTitle: ["空き家をもう一度", "地域の未来へ"], contactBody: "自治体・所有者・エネルギー企業・投資家・研究機関との実証および事業連携を準備しています。", contactButton: "プロジェクトに相談する", backTop: "ページ上部へ",
  },
  es: {
    code: "ES", languageName: "Español", homeAria: "Inicio de Phoenix UOS", navAria: "Navegación principal", menuOpen: "Cerrar menú", menuClosed: "Abrir menú", languageAria: "Seleccionar idioma",
    nav: ["Visión", "Sistemas", "Piloto 20 viviendas", "Modelo", "Global"], contactNav: "Contactar proyecto",
    heroEyebrow: "REGENERATE EMPTY HOMES", heroTitle: ["Devolver vida a", "las casas vacías"], heroDescription: ["Phoenix UOS es una plataforma integrada que transforma viviendas vacías en un ", "activo regional", " que combina hogares sostenibles, energía distribuida, recuperación ecológica y datos operativos con IA."], pilotButton: "Ver piloto de 20 viviendas", systemButton: "Ver el sistema ecológico",
    signalPilot: "Objetivo del primer piloto", statOne: "Objetivo del primer piloto", statTwo: "Vivienda · Energía · Ecología · IA", statThree: "Datos operativos integrados", scroll: "SCROLL TO REGENERATE",
    visionTitle: ["Una casa vacía no es un coste,", "es un nuevo activo regional."], visionBody: "Phoenix UOS no consiste solo en renovar casas vacías envejecidas. Conecta vivienda, energía renovable, ecología y datos en un único sistema operativo.", visionLink: "Ver las conexiones del sistema",
    systemsTitle: ["Cuatro sistemas,", "una sola plataforma"], systemsIntro: ["No se trata de sumar tecnologías aisladas, sino de crear una ", "estructura operativa territorial", " donde cada sistema mejora a los demás."],
    systemItems: [["Regeneración de viviendas", "Rediseñamos viviendas abandonadas como espacios de vida sostenibles y eficientes."], ["Energía distribuida", "La energía solar, el almacenamiento y la gestión energética elevan la autonomía de cada edificio."], ["Recuperación ecológica", "Restauramos vegetación, agua, suelo y biodiversidad más allá de los límites del edificio."], ["Operación con IA", "Acumulamos datos de producción, uso y operación para mejorar cada próxima renovación."]],
    pilotTitle: ["Validamos en 20 viviendas", "y escalamos a la ciudad."], pilotCopy: "Un modelo inicial de demostración que reúne datos reales de generación energética, recuperación ecológica, satisfacción de propietarios e ingresos operativos.", pilotSteps: ["Identificación y diagnóstico", "Renovación sostenible", "Instalación de energía e IA", "Acumulación de datos operativos"], pilotAlt: "Vivienda regenerada con techo solar y jardín de lluvia",
    modelTitle: ["Más allá de la renovación,", "un modelo de ingresos duradero"], modelBody: "Aspiramos a una estructura que trascienda los ingresos de desarrollo y se amplíe hacia operación residencial, energía, gestión basada en datos y alianzas locales.",
    globalTitle: ["Problemas distintos en cada lugar,", "un mismo lenguaje operativo"], globalBody: "A partir de los datos de demostración en Corea, ampliamos un modelo local adaptado a las condiciones de vivienda y energía de cada país.", regions: ["Corea", "Japón", "Europa", "Sudeste asiático", "MENA"], ecologyAlt: "Jardín de lluvia y vegetación nativa junto a una vivienda regenerada",
    contactTitle: ["Devolvamos las casas vacías", "al futuro local"], contactBody: "Preparamos proyectos piloto y alianzas con gobiernos locales, propietarios, empresas de energía, inversores e instituciones de investigación.", contactButton: "Hablar del proyecto", backTop: "Volver arriba",
  },
} as const;

const whitepaperContent = {
  ko: { nav: "백서", eyebrow: "06 / PROJECT WHITE PAPER", title: ["설명 가능한 시스템,", "검증 가능한 순환"], intro: "Phoenix UOS 백서는 빈집 재생, 분산 에너지, 생태 회복, AI 운영을 하나의 지역 운영체계로 연결하는 프로젝트 설계 초안입니다.", download: "백서 초안 읽기", chapters: [["01", "문제와 기회", "방치된 빈집을 비용이 아닌 지역 단위의 주거·에너지·생태 자산으로 재정의합니다."], ["02", "운영 아키텍처", "주거, 에너지, 생태, AI 데이터가 상호 연결되어 현장 운영의 학습 속도를 높입니다."], ["03", "20 Homes 실증", "초기 20채에서 성과 지표와 운영 데이터를 검증하고 다음 지역 확장의 기준을 만듭니다."], ["04", "기여와 이용", "검증된 지역 기여를 기록하고, 에너지·운영 데이터 서비스의 이용 구조를 탐색합니다."]], utilityEyebrow: "UTILITY DESIGN / PRELIMINARY", utilityTitle: "토큰은 거래 대상이 아닌, 지역 순환의 기록이어야 합니다.", utilityBody: "향후 토큰 설계는 지역 재생 기여에 대한 보상과 플랫폼 서비스 이용권이라는 두 가지 실사용만 우선 검토합니다. 발행, 판매, 가격, 상장 또는 수익은 약속하지 않습니다.", utilities: ["검증된 지역 기여 기록", "에너지·운영 데이터 서비스 이용", "참여 이력의 투명한 확인"], notice: "사전 설계 단계입니다. 법률·규제·보안·세무 검토 및 이용자 보호 체계 확정 전에는 토큰을 발행하거나 판매하지 않습니다.", sourceLabel: "공시·위험 고지 참고" },
  en: { nav: "White paper", eyebrow: "06 / PROJECT WHITE PAPER", title: ["An explainable system,", "a verifiable cycle"], intro: "The Phoenix UOS White Paper is a project-design draft that connects vacant-home regeneration, distributed energy, ecological recovery, and AI operations into one local operating system.", download: "Read the draft white paper", chapters: [["01", "Problem & opportunity", "We redefine neglected homes not as costs, but as local housing, energy, and ecological assets."], ["02", "Operating architecture", "Housing, energy, ecology, and AI data are connected to make every field operation more learnable."], ["03", "20 Homes validation", "The first twenty homes test performance indicators and operational data before the model expands to new places."], ["04", "Contribution & access", "We explore a structure that records verified local contribution and grants access to energy and operations-data services."]], utilityEyebrow: "UTILITY DESIGN / PRELIMINARY", utilityTitle: "A token should record local circulation—not become an object of speculation.", utilityBody: "Future token design will only examine two practical uses: recognising verified local-regeneration contributions and enabling access to platform services. It makes no promise of issuance, sale, price, listing, or return.", utilities: ["Record verified local contribution", "Access energy and operations-data services", "Make participation history auditable"], notice: "Preliminary design only. No token will be issued or sold until legal, regulatory, security, tax, and user-protection reviews are complete.", sourceLabel: "Disclosure & risk references" },
  ja: { nav: "ホワイトペーパー", eyebrow: "06 / PROJECT WHITE PAPER", title: ["説明できる仕組み、", "検証できる循環"], intro: "Phoenix UOSのホワイトペーパーは、空き家再生・分散型エネルギー・生態系の回復・AI運用を一つの地域運用システムとしてつなぐプロジェクト設計の初稿です。", download: "ホワイトペーパー草案を読む", chapters: [["01", "課題と可能性", "放置された空き家をコストではなく、地域単位の住まい・エネルギー・生態資産として捉え直します。"], ["02", "運用アーキテクチャ", "住まい、エネルギー、生態、AIデータをつなぎ、現場運用の学習速度を高めます。"], ["03", "20棟での検証", "最初の20棟で成果指標と運用データを検証し、次の地域展開の基準をつくります。"], ["04", "貢献と利用", "検証済みの地域貢献を記録し、エネルギー・運用データサービスの利用構造を検討します。"]], utilityEyebrow: "UTILITY DESIGN / PRELIMINARY", utilityTitle: "トークンは投機の対象ではなく、地域循環の記録であるべきです。", utilityBody: "将来のトークン設計では、地域再生への貢献に対する記録と、プラットフォームサービスへの利用という二つの実用目的のみを優先して検討します。発行、販売、価格、上場、収益を約束するものではありません。", utilities: ["検証済み地域貢献の記録", "エネルギー・運用データサービスへの利用", "参加履歴の透明な確認"], notice: "これは事前設計段階です。法務・規制・セキュリティ・税務・利用者保護の検討が完了するまで、トークンを発行または販売しません。", sourceLabel: "開示・リスク情報" },
  es: { nav: "Documento técnico", eyebrow: "06 / PROJECT WHITE PAPER", title: ["Un sistema explicable,", "un ciclo verificable"], intro: "El documento técnico de Phoenix UOS es un borrador de diseño que conecta la regeneración de viviendas vacías, energía distribuida, recuperación ecológica y operación con IA en un único sistema local.", download: "Leer el borrador", chapters: [["01", "Problema y oportunidad", "Redefinimos las viviendas abandonadas no como costes, sino como activos locales de vivienda, energía y ecología."], ["02", "Arquitectura operativa", "Vivienda, energía, ecología y datos de IA se conectan para que cada operación de campo sea más aprendible."], ["03", "Validación en 20 viviendas", "Las primeras veinte viviendas validan indicadores y datos operativos antes de ampliar el modelo a nuevos lugares."], ["04", "Contribución y acceso", "Exploramos una estructura que registra la contribución local verificada y da acceso a servicios de energía y datos operativos."]], utilityEyebrow: "DISEÑO DE UTILIDAD / PRELIMINAR", utilityTitle: "Un token debe registrar la circulación local, no convertirse en un objeto de especulación.", utilityBody: "El futuro diseño del token solo analizará dos usos prácticos: reconocer contribuciones verificadas a la regeneración local y permitir acceso a servicios de la plataforma. No promete emisión, venta, precio, cotización ni rentabilidad.", utilities: ["Registrar contribución local verificada", "Acceder a servicios de energía y datos operativos", "Hacer auditable el historial de participación"], notice: "Solo diseño preliminar. No se emitirá ni venderá ningún token hasta completar las revisiones legales, regulatorias, de seguridad, fiscales y de protección al usuario.", sourceLabel: "Referencias de divulgación y riesgo" },
} as const;

const videoContent = {
  ko: { eyebrow: "06 / LIVING ECOSYSTEM", title: ["빈집 하나가", "지역 생태계가 되는 순간"], copy: "빈집의 회복은 리노베이션에서 끝나지 않습니다. 태양광, 빗물 정원, 토종 식생, 에너지 운영 데이터가 연결되면 한 채의 집은 지역의 회복력을 키우는 생태계가 됩니다.", label: "PHX / FIELD LOOP 01", fallback: "미래의 빈집이 주거·에너지·생태·AI 운영이 연결된 지역 생태계로 변화하는 모습을 보여주는 영상입니다." },
  en: { eyebrow: "06 / LIVING ECOSYSTEM", title: ["The moment one vacant home", "becomes a local ecosystem"], copy: "Renewal does not end with renovation. When solar energy, rain gardens, native planting, and operations data connect, one home becomes an ecosystem that strengthens local resilience.", label: "PHX / FIELD LOOP 01", fallback: "A video showing a vacant home becoming a local ecosystem through housing, energy, ecology, and AI-enabled operations." },
  ja: { eyebrow: "06 / LIVING ECOSYSTEM", title: ["一軒の空き家が", "地域の生態系になる瞬間"], copy: "再生はリノベーションで終わりません。太陽光、雨水庭園、在来植生、運用データがつながると、一軒の住まいは地域の回復力を育てる生態系になります。", label: "PHX / FIELD LOOP 01", fallback: "空き家が住まい・エネルギー・生態・AI運用によって地域の生態系へ変化する様子を示す映像です。" },
  es: { eyebrow: "06 / ECOSISTEMA VIVO", title: ["El momento en que una vivienda vacía", "se convierte en un ecosistema local"], copy: "La regeneración no termina con la reforma. Cuando la energía solar, los jardines de lluvia, la vegetación nativa y los datos operativos se conectan, una vivienda se convierte en un ecosistema que fortalece la resiliencia local.", label: "PHX / FIELD LOOP 01", fallback: "Un video que muestra cómo una vivienda vacía se transforma en un ecosistema local mediante vivienda, energía, ecología y operación con IA." },
} as const;

type Locale = keyof typeof content;
const locales: Locale[] = ["ko", "en", "ja", "es"];
const navLinks = ["#vision", "#systems", "#pilot", "#model", "#global"];
const systemMeta = [["01", "HOUSING", "habitat"], ["02", "ENERGY", "energy"], ["03", "ECOLOGY", "ecology"], ["04", "AI DATA", "data"]] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("ko");
  const t = content[locale];
  const w = whitepaperContent[locale];
  const v = videoContent[locale];

  useEffect(() => {
    const saved = window.localStorage.getItem("phoenix-uos-language");
    if (saved === "ko" || saved === "en" || saved === "ja" || saved === "es") setLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const chooseLocale = (next: Locale) => {
    setLocale(next);
    window.localStorage.setItem("phoenix-uos-language", next);
    setMenuOpen(false);
  };

  return (
    <main className="site-shell" id="home">
      <style>{`.language-picker{display:flex;align-items:center;gap:3px;padding:3px;border:1px solid rgba(255,255,255,.28);background:rgba(6,31,21,.28);border-radius:999px}.language-picker button{min-width:31px;padding:6px 7px;border:0;border-radius:999px;background:transparent;color:rgba(255,255,255,.65);font-family:Manrope,sans-serif;font-size:.57rem;font-weight:800;letter-spacing:.06em;transition:background .16s,color .16s}.language-picker button:hover{color:white}.language-picker button[aria-pressed="true"]{background:var(--verdant);color:var(--ink)}.mobile-language-picker{display:flex;gap:7px;padding:17px 0 4px}.mobile-language-picker button{flex:1;min-height:37px;border:1px solid rgba(183,255,215,.28);background:transparent;color:white;font-family:Manrope,sans-serif;font-size:.67rem;font-weight:800}.mobile-language-picker button[aria-pressed="true"]{border-color:var(--verdant);background:var(--verdant);color:var(--ink)}@media(max-width:900px){.site-header>.language-picker{display:none}}@media(min-width:901px){.mobile-language-picker{display:none}}`}</style>
      <header className="site-header">
        <a className="brand" href="#home" aria-label={t.homeAria}>
          <img className="brand-mark" src={asset.mark} alt="" />
          <span className="brand-lockup"><strong>PHOENIX UOS</strong><small>Vacant House Ecology &amp; Energy</small></span>
        </a>
        <nav className="desktop-nav" aria-label={t.navAria}>{navLinks.map((href, index) => <a key={href} href={href}>{t.nav[index]}</a>)}</nav>
        <a className="whitepaper-nav" href="#whitepaper">{w.nav}</a>
        <div className="language-picker" aria-label={t.languageAria}>{locales.map((item) => <button key={item} type="button" aria-pressed={locale === item} onClick={() => chooseLocale(item)} title={content[item].languageName}>{content[item].code}</button>)}</div>
        <a className="nav-contact" href="#contact">{t.contactNav} <span>↗</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? t.menuOpen : t.menuClosed}>{menuOpen ? "×" : "☰"}</button>
        {menuOpen && <nav className="mobile-menu" aria-label={t.navAria}>
          {navLinks.map((href, index) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{t.nav[index]}<span>↘</span></a>)}
          <a href="#whitepaper" onClick={() => setMenuOpen(false)}>{w.nav}<span>↘</span></a>
          <div className="mobile-language-picker" aria-label={t.languageAria}>{locales.map((item) => <button key={item} type="button" aria-pressed={locale === item} onClick={() => chooseLocale(item)}>{content[item].languageName}</button>)}</div>
          <a className="mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>{t.contactNav} <span>↗</span></a>
        </nav>}
      </header>

      <section className="hero" aria-labelledby="hero-title"><div className="hero-backdrop" aria-hidden="true"/><div className="hero-grid-lines" aria-hidden="true"/>
        <div className="hero-copy"><p className="eyebrow light">{t.heroEyebrow}</p><h1 id="hero-title">{t.heroTitle[0]}<span>{t.heroTitle[1]}</span></h1><p className="hero-description">{t.heroDescription[0]}<em>{t.heroDescription[1]}</em>{t.heroDescription[2]}</p><div className="hero-actions"><a className="button primary" href="#pilot">{t.pilotButton} <span>↘</span></a><a className="text-link light" href="#systems">{t.systemButton} <span>↗</span></a></div></div>
        <aside className="hero-signal" aria-label="Phoenix UOS key metrics"><span className="signal-label">PHX / FIELD UNIT 01</span><div className="signal-ring"><span>20</span><small>HOMES</small></div><p>{t.signalPilot}</p><div className="pulse-line"><i/><i/><i/><i/></div></aside>
        <div className="hero-bottom"><div className="hero-stat"><strong>20 Homes</strong><span>{t.statOne}</span></div><div className="hero-stat"><strong>4 Systems</strong><span>{t.statTwo}</span></div><div className="hero-stat"><strong>1 Platform</strong><span>{t.statThree}</span></div></div><a className="scroll-cue" href="#vision"><span>{t.scroll}</span><b>⌄</b></a>
      </section>

      <section className="vision section-wrap" id="vision" aria-labelledby="vision-title"><div className="section-label-wrap"><p className="eyebrow">01 / VISION</p><span className="line-dot"/></div><div className="vision-layout"><h2 id="vision-title">{t.visionTitle[0]}<span>{t.visionTitle[1]}</span></h2><div className="vision-text"><p>{t.visionBody}</p><a className="text-link dark" href="#systems">{t.visionLink} <span>↘</span></a></div></div><div className="vision-stamp">LOCAL ASSET / 2026</div></section>

      <section className="systems" id="systems" aria-labelledby="systems-title"><div className="systems-top section-wrap"><div><p className="eyebrow light">02 / CORE SYSTEMS</p><h2 id="systems-title">{t.systemsTitle[0]}<br/>{t.systemsTitle[1]}</h2></div><p className="systems-intro">{t.systemsIntro[0]}<br/><em>{t.systemsIntro[1]}</em>{t.systemsIntro[2]}</p></div><div className="system-list section-wrap">{systemMeta.map(([number, eyebrow, style], index) => <article className="system-card" key={number}><div className="system-card-head"><span>{number}</span><span>{eyebrow}</span></div><div className={`system-orbit ${style}`} aria-hidden="true"><i/><b/><em/></div><h3>{t.systemItems[index][0]}</h3><p>{t.systemItems[index][1]}</p></article>)}</div><div className="ecosystem-strip"><span>HOUSING</span><i/><span>ENERGY</span><i/><span>ECOLOGY</span><i/><span>AI DATA</span><i/><span>LOCAL VALUE</span></div></section>

      <section className="pilot section-wrap" id="pilot" aria-labelledby="pilot-title"><div className="pilot-image-wrap"><img src={asset.pilot} alt={t.pilotAlt}/><span className="image-marker marker-a">FIELD TEST / KOREA</span><span className="image-marker marker-b">+ 20 HOMES</span></div><div className="pilot-content"><p className="eyebrow">03 / 20 HOMES PILOT</p><h2 id="pilot-title">{t.pilotTitle[0]}<br/><em>{t.pilotTitle[1]}</em></h2><p className="pilot-copy">{t.pilotCopy}</p><ol className="pilot-steps">{t.pilotSteps.map((step,index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong><b>↗</b></li>)}</ol></div></section>

      <section className="model" id="model" aria-labelledby="model-title"><div className="model-art" aria-hidden="true"><img src={asset.data} alt=""/><div className="model-radar"><i/><i/><i/><b/></div></div><div className="model-content section-wrap"><p className="eyebrow light">04 / BUSINESS MODEL</p><h2 id="model-title">{t.modelTitle[0]}<br/>{t.modelTitle[1]}</h2><p>{t.modelBody}</p><div className="revenue-tags"><span>RESIDENCE</span><span>ENERGY</span><span>OPERATIONS</span><span>LOCAL PARTNERSHIP</span></div></div></section>

      <section className="global section-wrap" id="global" aria-labelledby="global-title"><div className="global-heading"><p className="eyebrow">05 / GLOBAL EXPANSION</p><h2 id="global-title">{t.globalTitle[0]}<br/>{t.globalTitle[1]}</h2></div><div className="global-copy"><p>{t.globalBody}</p><div className="territories">{t.regions.map((region,index) => <span key={region}><b>0{index + 1}</b>{region}</span>)}</div></div><div className="ecology-photo"><img src={asset.ecology} alt={t.ecologyAlt}/><p>DESIGNED FOR EACH PLACE,<br/>MEASURED AS ONE SYSTEM.</p></div></section>

      <section className="ecosystem-video" aria-labelledby="ecosystem-video-title"><video className="ecosystem-video-media" autoPlay muted loop playsInline preload="metadata" poster={asset.pilot} aria-describedby="ecosystem-video-description"><source src={asset.video} type="video/mp4"/></video><div className="ecosystem-video-scrim" aria-hidden="true"/><div className="ecosystem-video-grid" aria-hidden="true"/><div className="ecosystem-video-copy section-wrap"><p className="eyebrow light">{v.eyebrow}</p><h2 id="ecosystem-video-title">{v.title[0]}<br/><span>{v.title[1]}</span></h2><p id="ecosystem-video-description">{v.copy}</p><div className="ecosystem-video-signal"><i/><span>{v.label}</span><b>●</b></div><span className="sr-only">{v.fallback}</span></div></section>

      <section className="whitepaper section-wrap" id="whitepaper" aria-labelledby="whitepaper-title"><div className="whitepaper-heading"><div><p className="eyebrow">{w.eyebrow}</p><h2 id="whitepaper-title">{w.title[0]}<br/><span>{w.title[1]}</span></h2></div><div className="whitepaper-intro"><p>{w.intro}</p><a className="text-link dark" href="/phoenix-uos-whitepaper.md" target="_blank" rel="noreferrer">{w.download} <span>↗</span></a></div></div><div className="whitepaper-grid">{w.chapters.map(([number, title, copy]) => <article key={number} className="whitepaper-chapter"><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="utility-panel"><div className="utility-orbit" aria-hidden="true"><i/><i/><b/></div><div className="utility-copy"><p className="eyebrow">{w.utilityEyebrow}</p><h3>{w.utilityTitle}</h3><p>{w.utilityBody}</p><div className="utility-tags">{w.utilities.map((item) => <span key={item}>{item}</span>)}</div></div><aside className="utility-notice"><strong>{w.sourceLabel}</strong><p>{w.notice}</p><div><a href="https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica" target="_blank" rel="noreferrer">ESMA MiCA ↗</a><a href="https://www.fsc.go.kr/eng/pr010101/81217" target="_blank" rel="noreferrer">Korea FSC ↗</a></div></aside></div></section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><div className="contact-orbit" aria-hidden="true"><i/><i/><i/></div><div className="contact-inner section-wrap"><p className="eyebrow light">07 / COLLABORATE</p><h2 id="contact-title">{t.contactTitle[0]}<br/><span>{t.contactTitle[1]}</span></h2><p>{t.contactBody}</p><a className="button cream" href="mailto:contact@phoenix-uos.com">{t.contactButton} <span>↗</span></a></div></section>
      <footer className="site-footer"><a className="brand footer-brand" href="#home"><img className="brand-mark" src={asset.mark} alt=""/><span className="brand-lockup"><strong>PHOENIX UOS</strong><small>Vacant House Ecology &amp; Energy</small></span></a><p>© 2026 Phoenix UOS. All rights reserved.</p><a className="back-top" href="#home">{t.backTop} <span>↗</span></a></footer>
    </main>
  );
}
