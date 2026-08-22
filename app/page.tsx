"use client";

/** Living Infrastructure: ecological editorialism for Phoenix UOS's regeneration platform. */
import { useState } from "react";

const navItems = [
  ["#vision", "비전"],
  ["#systems", "핵심 시스템"],
  ["#pilot", "20 Homes Pilot"],
  ["#model", "수익모델"],
  ["#global", "Global"],
];

const systems = [
  ["01", "HOUSING", "빈집 재생", "지역의 방치된 주택을 친환경·고효율 생활 공간으로 다시 설계합니다.", "habitat"],
  ["02", "ENERGY", "분산형 에너지", "태양광과 에너지 저장·관리 구조를 통해 건물 단위의 자립도를 높입니다.", "energy"],
  ["03", "ECOLOGY", "생태 회복", "녹지·물·토양·생물 다양성을 건축의 경계 바깥까지 함께 되돌립니다.", "ecology"],
  ["04", "AI DATA", "AI 운영", "생산과 사용, 운영 데이터를 축적해 다음 리노베이션의 효율을 개선합니다.", "data"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell" id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Phoenix UOS 홈">
          <img className="brand-mark" src="/phoenix-mark.png" alt="" />
          <span className="brand-lockup"><strong>PHOENIX UOS</strong><small>Vacant House Ecology &amp; Energy</small></span>
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navItems.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="nav-contact" href="#contact">프로젝트 문의 <span>↗</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}>{menuOpen ? "×" : "☰"}</button>
        {menuOpen && <nav className="mobile-menu" aria-label="모바일 메뉴">
          {navItems.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<span>↘</span></a>)}
          <a className="mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>프로젝트 문의 <span>↗</span></a>
        </nav>}
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow light">REGENERATE EMPTY HOMES</p>
          <h1 id="hero-title">빈집을 다시<span>살아있는 생태계로</span></h1>
          <p className="hero-description">Phoenix UOS는 방치된 빈집을 친환경 주거, 분산형 에너지, 생태 회복, AI 운영 데이터가 결합된 <em>지역 자산</em>으로 전환하는 통합 플랫폼입니다.</p>
          <div className="hero-actions"><a className="button primary" href="#pilot">20채 시범사업 보기 <span>↘</span></a><a className="text-link light" href="#systems">생태계 구조 보기 <span>↗</span></a></div>
        </div>
        <aside className="hero-signal" aria-label="Phoenix UOS 핵심 지표">
          <span className="signal-label">PHX / FIELD UNIT 01</span>
          <div className="signal-ring"><span>20</span><small>HOMES</small></div><p>1차 Pilot Target</p><div className="pulse-line"><i/><i/><i/><i/></div>
        </aside>
        <div className="hero-bottom">
          <div className="hero-stat"><strong>20 Homes</strong><span>1차 Pilot Target</span></div>
          <div className="hero-stat"><strong>4 Systems</strong><span>주거 · 에너지 · 생태 · AI</span></div>
          <div className="hero-stat"><strong>1 Platform</strong><span>통합 운영 데이터</span></div>
        </div>
        <a className="scroll-cue" href="#vision"><span>SCROLL TO REGENERATE</span><b>⌄</b></a>
      </section>

      <section className="vision section-wrap" id="vision" aria-labelledby="vision-title">
        <div className="section-label-wrap"><p className="eyebrow">01 / VISION</p><span className="line-dot"/></div>
        <div className="vision-layout"><h2 id="vision-title">빈집은 비용이 아니라<span>새로운 지역 자산입니다.</span></h2><div className="vision-text"><p>Phoenix UOS는 노후 빈집을 단순 리모델링하는 사업이 아닙니다. 주거·재생에너지·생태·데이터를 하나의 운영체계로 연결합니다.</p><a className="text-link dark" href="#systems">시스템의 연결 구조 <span>↘</span></a></div></div>
        <div className="vision-stamp">LOCAL ASSET / 2026</div>
      </section>

      <section className="systems" id="systems" aria-labelledby="systems-title">
        <div className="systems-top section-wrap"><div><p className="eyebrow light">02 / CORE SYSTEMS</p><h2 id="systems-title">4개의 시스템,<br/>하나의 플랫폼</h2></div><p className="systems-intro">개별 기술을 더하는 것이 아니라, 서로의 효율을 높이는<br/><em>지역 단위 운영 구조</em>를 만듭니다.</p></div>
        <div className="system-list section-wrap">
          {systems.map(([number, eyebrow, title, description, style]) => <article className="system-card" key={number}><div className="system-card-head"><span>{number}</span><span>{eyebrow}</span></div><div className={`system-orbit ${style}`} aria-hidden="true"><i/><b/><em/></div><h3>{title}</h3><p>{description}</p></article>)}
        </div>
        <div className="ecosystem-strip"><span>HOUSING</span><i/><span>ENERGY</span><i/><span>ECOLOGY</span><i/><span>AI DATA</span><i/><span>LOCAL VALUE</span></div>
      </section>

      <section className="pilot section-wrap" id="pilot" aria-labelledby="pilot-title">
        <div className="pilot-image-wrap"><img src="/phoenix-pilot.jpg" alt="태양광 지붕과 빗물 정원을 갖춘 재생 주택"/><span className="image-marker marker-a">FIELD TEST / KOREA</span><span className="image-marker marker-b">+ 20 HOMES</span></div>
        <div className="pilot-content"><p className="eyebrow">03 / 20 HOMES PILOT</p><h2 id="pilot-title">20채에서 검증하고,<br/><em>도시 단위로 확장합니다.</em></h2><p className="pilot-copy">실제 빈집을 대상으로 에너지 생산량, 생태 회복 효과, 소유주 만족도, 운영 수익 데이터를 확보하는 초기 실증 모델입니다.</p><ol className="pilot-steps">{[["01","빈집 발굴 및 진단"],["02","친환경 리노베이션"],["03","에너지·AI 시스템 설치"],["04","운영 데이터 축적"]].map(([number, text]) => <li key={number}><span>{number}</span><strong>{text}</strong><b>↗</b></li>)}</ol></div>
      </section>

      <section className="model" id="model" aria-labelledby="model-title"><div className="model-art" aria-hidden="true"><img src="/phoenix-data.jpg" alt=""/><div className="model-radar"><i/><i/><i/><b/></div></div><div className="model-content section-wrap"><p className="eyebrow light">04 / BUSINESS MODEL</p><h2 id="model-title">재생 이후에도<br/>지속되는 <em>운영 수익 구조</em></h2><p>개발 수익에만 의존하지 않고 주거 운영, 에너지, 데이터 기반 관리, 지역 협력 사업으로 확장할 수 있는 구조를 지향합니다.</p><div className="revenue-tags"><span>RESIDENCE</span><span>ENERGY</span><span>OPERATIONS</span><span>LOCAL PARTNERSHIP</span></div></div></section>

      <section className="global section-wrap" id="global" aria-labelledby="global-title"><div className="global-heading"><p className="eyebrow">05 / GLOBAL EXPANSION</p><h2 id="global-title">지역마다 다른 문제를,<br/>하나의 운영 언어로</h2></div><div className="global-copy"><p>국내 실증 데이터를 기반으로 각 국가의 주거·에너지 환경에 맞춘 지역형 모델로 확장합니다.</p><div className="territories">{["Korea","Japan","Europe","Southeast Asia","MENA"].map((region,index) => <span key={region}><b>0{index+1}</b>{region}</span>)}</div></div><div className="ecology-photo"><img src="/phoenix-ecology.jpg" alt="재생 주택 주변의 빗물 정원과 토종 식생"/><p>DESIGNED FOR EACH PLACE,<br/>MEASURED AS ONE SYSTEM.</p></div></section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><div className="contact-orbit" aria-hidden="true"><i/><i/><i/></div><div className="contact-inner section-wrap"><p className="eyebrow light">06 / COLLABORATE</p><h2 id="contact-title">빈집을 다시<br/><span>지역의 미래로</span></h2><p>지자체, 소유주, 에너지 기업, 투자자, 연구기관과의 실증 및 사업 협력을 준비합니다.</p><a className="button cream" href="mailto:contact@phoenix-uos.com">프로젝트 문의하기 <span>↗</span></a></div></section>
      <footer className="site-footer"><a className="brand footer-brand" href="#home"><img className="brand-mark" src="/phoenix-mark.png" alt=""/><span className="brand-lockup"><strong>PHOENIX UOS</strong><small>Vacant House Ecology &amp; Energy</small></span></a><p>© 2026 Phoenix UOS. All rights reserved.</p><a className="back-top" href="#home">처음으로 <span>↗</span></a></footer>
    </main>
  );
}
