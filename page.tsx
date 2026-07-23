const systems = [
  ["01", "🏡", "빈집 재생", "방치된 빈집을 조사하고 안전성, 활용 가능성, 리모델링 비용을 분석합니다."],
  ["02", "🌿", "생태 복원", "숲, 빗물정원, 텃밭과 작은 습지를 연결해 생물다양성을 회복합니다."],
  ["03", "☀️", "분산 에너지", "태양광, ESS, EV 충전과 스마트 전력관리로 에너지 비용을 줄입니다."],
  ["04", "🤖", "AI 운영", "빈집 위험도, 에너지 생산량, 유지보수와 운영수익을 통합 관리합니다."],
  ["05", "🤝", "지역 상생", "주민, 청년, 귀촌인, 관광객과 디지털 노마드를 연결합니다."],
  ["06", "📊", "데이터 자산", "에너지, 탄소, 생태, 이용률과 수익 데이터를 투자 근거로 축적합니다."],
];

const revenue = [
  ["01", "주거·장기임대", "귀촌인과 원격근무자를 위한 친환경 장기 체류 주거"],
  ["02", "관광·체험", "생태 체험, 지역문화, 농촌 휴식과 소규모 숙박 프로그램"],
  ["03", "에너지 수익", "태양광 발전, ESS, EV 충전과 에너지 절감 수익"],
  ["04", "AI 플랫폼", "빈집 분석, 유지보수, 운영과 투자 데이터 서비스"],
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="container nav">
          <a className="brand" href="#home">
            <span className="brandMark">P</span>
            <span><b>PHOENIX UOS</b><small>Vacant House Ecology & Energy</small></span>
          </a>
          <nav>
            <a href="#vision">비전</a>
            <a href="#system">핵심 시스템</a>
            <a href="#pilot">20채 시범마을</a>
            <a href="#business">수익모델</a>
          </nav>
          <a className="navButton" href="#contact">프로젝트 문의</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">REGENERATE EMPTY HOMES</p>
            <h1>빈집을 다시<br/><span>살아있는 생태계</span>로</h1>
            <p className="lead">Phoenix UOS는 방치된 빈집을 친환경 주거, 재생에너지, 지역경제와 AI 운영 시스템으로 연결합니다.</p>
            <div className="actions">
              <a className="primary" href="#pilot">20채 시범마을 보기</a>
              <a className="secondary" href="#system">생태계 구조 보기</a>
            </div>
            <div className="stats">
              <article><strong>20</strong><span>1차 시범 빈집</span></article>
              <article><strong>4</strong><span>통합 핵심 시스템</span></article>
              <article><strong>1</strong><span>AI 운영 플랫폼</span></article>
            </div>
          </div>

          <div className="villageVisual" aria-label="친환경 빈집 마을">
            <div className="sun" />
            <div className="chip chip1">AI 에너지 예측</div>
            <div className="chip chip2">생태복원 데이터</div>
            <div className="chip chip3">지역 수익 순환</div>
            <div className="mountain m1" /><div className="mountain m2" />
            <div className="tree t1" /><div className="tree t2" />
            <div className="house"><div className="roof"><div className="solar" /></div><div className="body"><i/><b/><i/></div></div>
            <div className="river" />
            <div className="visualLabel"><strong>Village as a Living Ecosystem</strong><span>Ecology · Energy · AI · Community</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="vision">
        <div className="container">
          <div className="heading">
            <p className="eyebrow">OUR VISION</p>
            <h2>마을 전체를 하나의<br/>살아있는 시스템으로</h2>
            <p>건물 한 채를 수리하는 데 그치지 않고 빈집, 숲, 물, 전력, 사람과 데이터가 함께 순환하는 지역 생태계를 설계합니다.</p>
          </div>
          <div className="visionPanel">
            <div><span>PHOENIX UOS MODEL</span><h3>빈집 문제를 지역 성장의 기반으로 전환합니다.</h3><p>소유주에게는 관리와 활용의 기회를, 지역에는 새로운 인구와 일자리를, 투자자에게는 측정 가능한 친환경 자산 모델을 제공합니다.</p></div>
            <div className="values"><article><b>REUSE</b><span>건축자산 재사용</span></article><article><b>RESTORE</b><span>생태와 공동체 복원</span></article><article><b>RECONNECT</b><span>사람·자연·에너지 연결</span></article></div>
          </div>
        </div>
      </section>

      <section className="section alt" id="system">
        <div className="container">
          <div className="heading split"><div><p className="eyebrow">INTEGRATED ECOSYSTEM</p><h2>Phoenix UOS<br/>핵심 시스템</h2></div><p>빈집 정비, 생태복원, 에너지 생산과 지역경제를 하나의 운영 플랫폼 안에서 통합합니다.</p></div>
          <div className="cards">
            {systems.map(([n, icon, title, text]) => <article className="card" key={n}><div className="cardTop"><span>{icon}</span><em>{n}</em></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="pilot">
        <div className="container">
          <div className="heading center"><p className="eyebrow">PILOT VILLAGE</p><h2>20채 시범마을 실행안</h2><p>작은 규모에서 빠르게 실증하고, 측정된 결과를 바탕으로 국내와 해외 확장 모델을 완성합니다.</p></div>
          <div className="pilotStats"><article><strong>20</strong><span>재생 대상 빈집</span></article><article><strong>5</strong><span>선도 리모델링</span></article><article><strong>12M</strong><span>운영 데이터 기간</span></article><article><strong>100%</strong><span>성과 기록</span></article></div>
          <div className="steps">
            <article><span>01</span><h3>후보지 선정</h3><p>빈집 밀집도, 접근성, 자연환경, 소유관계와 에너지 조건을 평가합니다.</p></article>
            <article><span>02</span><h3>5채 선도 리모델링</h3><p>대표 모델을 먼저 완성해 공사비, 수요와 실제 운영방식을 검증합니다.</p></article>
            <article><span>03</span><h3>20채 확장</h3><p>주거, 체류형 관광, 청년 창업, 커뮤니티 시설로 기능을 구분합니다.</p></article>
            <article><span>04</span><h3>성과 데이터화</h3><p>에너지, 탄소, 생태, 만족도와 매출을 정량적으로 기록합니다.</p></article>
          </div>
        </div>
      </section>

      <section className="section dashboardSection">
        <div className="container dashboardGrid">
          <div><p className="eyebrow">AI & DATA PLATFORM</p><h2>마을의 변화를<br/>데이터로 증명합니다.</h2><p className="lead small">에너지 생산량, 빈집 상태, 유지보수, 이용률, 탄소 절감과 생태복원 효과를 한 화면에서 확인합니다.</p><ul><li>에너지 생산량과 소비량 예측</li><li>빈집 위험도 및 유지보수 알림</li><li>생태환경과 탄소 절감 기록</li><li>운영수익과 투자성과 분석</li></ul></div>
          <div className="dashboard"><div className="dashHead">PHOENIX UOS CONTROL CENTER</div><div className="dashStats"><article><span>ENERGY GENERATED</span><strong>128.4 MWh</strong></article><article><span>CARBON REDUCTION</span><strong>74.8 tCO₂</strong></article></div><div className="chart"><svg viewBox="0 0 500 190"><path d="M0 160 C60 150 80 110 130 120 C190 135 210 70 265 88 C320 105 340 35 395 58 C445 78 465 20 500 25" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/></svg></div><div className="dashBottom"><span>OCCUPANCY <b>86%</b></span><span>HOMES ONLINE <b>20/20</b></span><span>STATUS <b>ONLINE</b></span></div></div>
        </div>
      </section>

      <section className="section alt" id="business">
        <div className="container">
          <div className="heading split"><div><p className="eyebrow">BUSINESS MODEL</p><h2>하나의 마을에서<br/>여러 수익이 발생합니다.</h2></div><p>공간, 에너지, 관광과 데이터를 결합한 복합 수익구조입니다.</p></div>
          <div className="revenue">{revenue.map(([n,t,x]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}</div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contactPanel"><div><p className="eyebrow">BUILD THE NEXT VILLAGE</p><h2>빈집을 다시<br/>지역의 미래로</h2><p>Phoenix UOS는 빈집을 생태, 에너지와 지역경제를 만드는 새로운 기반으로 바라봅니다.</p></div><a href="mailto:contact@phoenix-uos.com">프로젝트 문의하기 <b>→</b></a></div>
      </section>

      <footer><div className="container footer"><span>© 2026 Phoenix UOS</span><span>Vacant House · Ecology · Energy · AI</span></div></footer>
    </main>
  );
}
