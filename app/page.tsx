export default function Home() {
  return (
    <main className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #071712;
          color: #f5fff9;
          font-family: Arial, "Noto Sans KR", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at 80% 20%, rgba(65, 230, 170, .12), transparent 30%),
            radial-gradient(circle at 20% 80%, rgba(34, 130, 255, .08), transparent 25%),
            linear-gradient(135deg, #071712 0%, #10271f 55%, #071712 100%);
        }

        .wrap {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(7, 23, 18, .88);
          border-bottom: 1px solid rgba(255,255,255,.08);
          backdrop-filter: blur(16px);
        }

        .nav {
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brandLogo {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: linear-gradient(135deg, #9effdf, #61e8c4);
          color: #09241b;
          font-weight: 900;
          font-size: 18px;
        }

        .brandTitle {
          font-weight: 900;
          font-size: 17px;
          letter-spacing: -.02em;
        }

        .brandSub {
          margin-top: 3px;
          color: #9db9ae;
          font-size: 11px;
        }

        .menu {
          display: flex;
          align-items: center;
          gap: 28px;
          font-size: 14px;
          font-weight: 700;
          color: #d7e8e1;
        }

        .contactBtn {
          padding: 13px 20px;
          border-radius: 12px;
          background: #8ef4d2;
          color: #08251b;
          font-weight: 900;
        }

        .hero {
          min-height: 720px;
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          align-items: center;
          gap: 70px;
          padding: 80px 0;
        }

        .eyebrow {
          color: #79eec6;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        h1 {
          margin: 18px 0 22px;
          font-size: clamp(48px, 6vw, 82px);
          line-height: .98;
          letter-spacing: -.055em;
        }

        .gradientText {
          display: block;
          color: #8cf4d2;
        }

        .heroText {
          max-width: 680px;
          color: #c0d1ca;
          font-size: 17px;
          line-height: 1.8;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .btnPrimary,
        .btnSecondary {
          padding: 15px 21px;
          border-radius: 13px;
          font-weight: 900;
          font-size: 14px;
        }

        .btnPrimary {
          background: #8cf4d2;
          color: #08251b;
        }

        .btnSecondary {
          border: 1px solid rgba(255,255,255,.18);
          color: #eafff7;
          background: rgba(255,255,255,.03);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 34px;
        }

        .stat {
          padding: 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.11);
          background: rgba(255,255,255,.035);
        }

        .stat strong {
          display: block;
          font-size: 20px;
        }

        .stat span {
          color: #8fa99f;
          font-size: 11px;
        }

        .visual {
          position: relative;
          height: 470px;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,.11);
          background:
            radial-gradient(circle at 75% 18%, #fff7c7 0 6%, transparent 6.5%),
            linear-gradient(180deg, #294a40 0%, #326d5a 52%, #58e3af 52%, #4ae2a1 72%, #3f9ddd 72%, #266cb6 100%);
          box-shadow: 0 40px 100px rgba(0,0,0,.35);
        }

        .house {
          position: absolute;
          left: 50%;
          top: 48%;
          transform: translate(-50%,-50%);
          width: 145px;
          height: 125px;
          background: #e9fff7;
          border-radius: 8px;
        }

        .house:before {
          content: "";
          position: absolute;
          left: 8px;
          top: -63px;
          width: 125px;
          height: 125px;
          background: #e9fff7;
          transform: rotate(45deg);
          border-radius: 6px;
          z-index: -1;
        }

        .door {
          position: absolute;
          width: 36px;
          height: 58px;
          left: 55px;
          bottom: 0;
          border-radius: 7px 7px 0 0;
          background: #9de8d4;
        }

        .solar {
          position: absolute;
          right: 12px;
          top: -34px;
          width: 70px;
          height: 49px;
          transform: skewY(15deg);
          border: 4px solid #e9fff7;
          background:
            repeating-linear-gradient(90deg,#347cb3 0 14px,#d8f5ff 14px 17px);
        }

        .tag {
          position: absolute;
          padding: 9px 12px;
          background: rgba(4,21,16,.75);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 9px;
          font-size: 11px;
          font-weight: 800;
        }

        .tag1 { left: 22px; top: 120px; }
        .tag2 { right: 18px; top: 210px; }
        .tag3 { left: 30px; bottom: 52px; }

        section {
          padding: 100px 0;
        }

        .sectionTitle {
          max-width: 760px;
          margin-bottom: 46px;
        }

        .sectionTitle h2 {
          margin: 12px 0;
          font-size: clamp(34px, 4vw, 54px);
          letter-spacing: -.04em;
        }

        .sectionTitle p {
          color: #9eb3aa;
          line-height: 1.75;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 16px;
        }

        .card {
          min-height: 250px;
          padding: 26px;
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 20px;
          background: rgba(255,255,255,.035);
        }

        .cardNum {
          color: #7cf0c8;
          font-size: 12px;
          font-weight: 900;
        }

        .card h3 {
          margin: 45px 0 12px;
          font-size: 22px;
        }

        .card p {
          color: #9cafA7;
          line-height: 1.65;
          font-size: 14px;
        }

        .pilot {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: stretch;
        }

        .pilotBox {
          padding: 38px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,.09);
          background: rgba(255,255,255,.035);
        }

        .pilotBig {
          font-size: 72px;
          font-weight: 900;
          color: #88f3d0;
          letter-spacing: -.06em;
        }

        .pilotBox p {
          color: #aabdb5;
          line-height: 1.7;
        }

        .flow {
          display: grid;
          gap: 12px;
        }

        .flowItem {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          border-radius: 14px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
        }

        .flowItem span {
          color: #7cf0c8;
          font-weight: 900;
        }

        .global {
          border-top: 1px solid rgba(255,255,255,.08);
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .countries {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .country {
          padding: 13px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.12);
          color: #c6d8d1;
        }

        .cta {
          padding: 65px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(111,240,196,.14), rgba(55,116,255,.10));
          border: 1px solid rgba(255,255,255,.10);
        }

        .cta h2 {
          margin: 12px 0;
          font-size: clamp(36px,5vw,60px);
          letter-spacing: -.05em;
        }

        footer {
          padding: 35px 0 45px;
          color: #82978f;
          font-size: 13px;
        }

        .footerFlex {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        @media (max-width: 900px) {
          .menu {
            display: none;
          }

          .hero {
            grid-template-columns: 1fr;
            padding-top: 55px;
          }

          .visual {
            height: 380px;
          }

          .cards {
            grid-template-columns: 1fr 1fr;
          }

          .pilot {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .wrap {
            width: min(100% - 26px, 1180px);
          }

          .nav {
            height: 68px;
          }

          .contactBtn {
            padding: 11px 14px;
            font-size: 12px;
          }

          .hero {
            min-height: auto;
            gap: 40px;
          }

          h1 {
            font-size: 48px;
          }

          .heroText {
            font-size: 15px;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .cards {
            grid-template-columns: 1fr;
          }

          .cta {
            padding: 32px 24px;
          }

          .footerFlex {
            flex-direction: column;
          }
        }
      `}</style>

      <header>
        <div className="wrap nav">
          <a className="brand" href="#home">
            <div className="brandLogo">P</div>
            <div>
              <div className="brandTitle">PHOENIX UOS</div>
              <div className="brandSub">Vacant House Ecology & Energy</div>
            </div>
          </a>

          <nav className="menu">
            <a href="#vision">비전</a>
            <a href="#system">핵심 시스템</a>
            <a href="#pilot">20 Homes Pilot</a>
            <a href="#model">수익모델</a>
            <a href="#global">Global</a>
          </nav>

          <a className="contactBtn" href="#contact">
            프로젝트 문의
          </a>
        </div>
      </header>

      <div className="wrap">
        <section className="hero" id="home">
          <div>
            <div className="eyebrow">Regenerate Empty Homes</div>

            <h1>
              빈집을 다시
              <span className="gradientText">살아있는 생태계로</span>
            </h1>

            <p className="heroText">
              Phoenix UOS는 방치된 빈집을 친환경 주거, 분산형 에너지,
              생태 회복, AI 운영 데이터가 결합된 지역 자산으로 전환하는
              통합 플랫폼입니다.
            </p>

            <div className="buttons">
              <a className="btnPrimary" href="#pilot">
                20채 시범사업 보기 →
              </a>
              <a className="btnSecondary" href="#system">
                생태계 구조 보기
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <strong>20 Homes</strong>
                <span>1차 Pilot Target</span>
              </div>
              <div className="stat">
                <strong>4 Systems</strong>
                <span>주거 · 에너지 · 생태 · AI</span>
              </div>
              <div className="stat">
                <strong>1 Platform</strong>
                <span>통합 운영 데이터</span>
              </div>
            </div>
          </div>

          <div className="visual">
            <div className="tag tag1">AI 에너지 예측</div>
            <div className="tag tag2">생태계 데이터</div>
            <div className="tag tag3">지역 순환 수익</div>

            <div className="house">
              <div className="solar" />
              <div className="door" />
            </div>
          </div>
        </section>

        <section id="vision">
          <div className="sectionTitle">
            <div className="eyebrow">Vision</div>
            <h2>빈집은 비용이 아니라 새로운 지역 자산입니다.</h2>
            <p>
              Phoenix UOS는 노후 빈집을 단순 리모델링하는 사업이 아닙니다.
              주거·재생에너지·생태·데이터를 하나의 운영체계로 연결합니다.
            </p>
          </div>
        </section>

        <section id="system">
          <div className="sectionTitle">
            <div className="eyebrow">Core Systems</div>
            <h2>4개의 시스템, 하나의 플랫폼</h2>
          </div>

          <div className="cards">
            <div className="card">
              <div className="cardNum">01 / HOUSING</div>
              <h3>빈집 재생</h3>
              <p>
                지역의 방치된 주택을 친환경·고효율 생활 공간으로 재설계합니다.
              </p>
            </div>

            <div className="card">
              <div className="cardNum">02 / ENERGY</div>
              <h3>분산형 에너지</h3>
              <p>
                태양광과 에너지 저장·관리 구조를 통해 건물 단위 에너지 효율을 높입니다.
              </p>
            </div>

            <div className="card">
              <div className="cardNum">03 / ECOLOGY</div>
              <h3>생태 회복</h3>
              <p>
                건축물 주변의 녹지, 물, 토양과 생물 다양성을 함께 회복하는 모델입니다.
              </p>
            </div>

            <div className="card">
              <div className="cardNum">04 / AI DATA</div>
              <h3>AI 운영</h3>
              <p>
                에너지 생산·사용량과 운영 데이터를 축적해 지속적으로 효율을 개선합니다.
              </p>
            </div>
          </div>
        </section>

        <section id="pilot">
          <div className="sectionTitle">
            <div className="eyebrow">20 Homes Pilot</div>
            <h2>20채에서 검증하고 도시 단위로 확장합니다.</h2>
          </div>

          <div className="pilot">
            <div className="pilotBox">
              <div className="pilotBig">20</div>
              <h3>Vacant Homes Pilot</h3>
              <p>
                실제 빈집을 대상으로 에너지 생산량, 생태 회복 효과,
                소유주 만족도, 운영 수익 데이터를 확보하는 초기 실증 모델입니다.
              </p>
            </div>

            <div className="pilotBox flow">
              <div className="flowItem">
                <strong>빈집 발굴 및 진단</strong>
                <span>01</span>
              </div>
              <div className="flowItem">
                <strong>친환경 리노베이션</strong>
                <span>02</span>
              </div>
              <div className="flowItem">
                <strong>에너지·AI 시스템 설치</strong>
                <span>03</span>
              </div>
              <div className="flowItem">
                <strong>운영 데이터 축적</strong>
                <span>04</span>
              </div>
            </div>
          </div>
        </section>

        <section id="model">
          <div className="sectionTitle">
            <div className="eyebrow">Business Model</div>
            <h2>재생 이후에도 지속되는 운영 수익 구조</h2>
            <p>
              개발 수익에만 의존하지 않고 주거 운영, 에너지,
              데이터 기반 관리 및 지역 협력 사업으로 확장할 수 있는 구조를 지향합니다.
            </p>
          </div>
        </section>

        <section className="global" id="global">
          <div className="sectionTitle">
            <div className="eyebrow">Global Expansion</div>
            <h2>빈집·노후주택·지역소멸 문제를 가진 시장으로 확장</h2>
            <p>
              국내 실증 데이터를 기반으로 각 국가의 주거·에너지 환경에 맞춘
              지역형 모델로 확장합니다.
            </p>

            <div className="countries">
              <span className="country">Korea</span>
              <span className="country">Japan</span>
              <span className="country">Europe</span>
              <span className="country">Southeast Asia</span>
              <span className="country">MENA</span>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="cta">
            <div className="eyebrow">Build the Next Local Asset</div>
            <h2>
              빈집을 다시
              <br />
              지역의 미래로
            </h2>
            <p className="heroText">
              지자체, 소유주, 에너지 기업, 투자자, 연구기관과의 실증 및
              사업 협력을 준비합니다.
            </p>

            <div className="buttons">
              <a
                className="btnPrimary"
                href="mailto:contact@phoenix-uos.com"
              >
                프로젝트 문의
              </a>
              <a className="btnSecondary" href="#home">
                처음으로 ↑
              </a>
            </div>
          </div>
        </section>

        <footer>
          <div className="footerFlex">
            <div>© 2026 Phoenix UOS. All rights reserved.</div>
            <div>Vacant House · Ecology · Energy · AI</div>
          </div>
        </footer>
      </div>
    </main>
  );
}