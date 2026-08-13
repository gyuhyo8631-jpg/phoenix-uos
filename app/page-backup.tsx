
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Phoenix UOS | 빈집 생태·에너지 플랫폼</title>
  <meta name="description" content="빈집을 생태, 에너지, AI와 연결하는 Phoenix UOS 플랫폼" />
  <style>
    :root{
      --bg:#071712;
      --bg-soft:#0d241b;
      --panel:#102d22;
      --panel2:#15392b;
      --text:#f4fff9;
      --muted:#a9c6b8;
      --green:#67e8a3;
      --green2:#28b779;
      --gold:#f4c86b;
      --line:rgba(255,255,255,.10);
      --shadow:0 24px 60px rgba(0,0,0,.35);
      --radius:26px;
    }

    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      font-family:Arial,"Noto Sans KR",sans-serif;
      color:var(--text);
      background:
        radial-gradient(circle at top right, rgba(40,183,121,.18), transparent 34%),
        linear-gradient(180deg,#06130f 0%,#0a1f17 55%,#071712 100%);
      line-height:1.6;
    }

    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .wrap{width:min(1180px,92%);margin:0 auto}
    .eyebrow{
      color:var(--green);
      font-weight:800;
      letter-spacing:.13em;
      text-transform:uppercase;
      font-size:.78rem;
    }

    header{
      position:sticky;top:0;z-index:30;
      background:rgba(5,18,13,.78);
      backdrop-filter:blur(16px);
      border-bottom:1px solid var(--line);
    }
    .nav{
      min-height:72px;
      display:flex;align-items:center;justify-content:space-between;
      gap:20px;
    }
    .brand{display:flex;align-items:center;gap:12px;font-weight:900}
    .logo{
      width:42px;height:42px;border-radius:14px;
      display:grid;place-items:center;
      background:linear-gradient(145deg,var(--green),var(--green2));
      color:#052015;font-size:1.25rem;
      box-shadow:0 10px 30px rgba(40,183,121,.35);
    }
    .brand small{display:block;color:var(--muted);font-weight:600;font-size:.72rem}
    nav{display:flex;gap:22px;color:#d8eee3;font-size:.94rem}
    .nav-btn,.btn{
      display:inline-flex;align-items:center;justify-content:center;
      padding:12px 18px;border-radius:14px;font-weight:800;
      background:linear-gradient(135deg,var(--green),var(--green2));
      color:#062117;box-shadow:0 12px 28px rgba(40,183,121,.22);
      border:none;cursor:pointer;
    }
    .btn.secondary{
      background:transparent;color:var(--text);
      border:1px solid var(--line);box-shadow:none;
    }

    .hero{
      min-height:780px;
      display:grid;align-items:center;
      padding:82px 0 64px;
      position:relative;overflow:hidden;
    }
    .hero-grid{
      display:grid;grid-template-columns:1.05fr .95fr;
      gap:60px;align-items:center;
    }
    h1{
      margin:16px 0 22px;
      font-size:clamp(3rem,6vw,6.2rem);
      line-height:1.02;letter-spacing:-.055em;
    }
    h1 span{color:var(--green)}
    .hero p{
      max-width:680px;color:var(--muted);
      font-size:1.12rem;margin-bottom:30px;
    }
    .actions{display:flex;gap:12px;flex-wrap:wrap}
    .stats{
      display:grid;grid-template-columns:repeat(3,1fr);
      gap:14px;margin-top:34px;
    }
    .stat{
      padding:18px;border:1px solid var(--line);
      border-radius:18px;background:rgba(255,255,255,.03);
    }
    .stat strong{font-size:1.5rem;display:block}
    .stat span{font-size:.86rem;color:var(--muted)}

    .visual{
      min-height:530px;position:relative;
      border:1px solid var(--line);
      border-radius:38px;
      background:
        radial-gradient(circle at 22% 20%,rgba(103,232,163,.20),transparent 30%),
        linear-gradient(160deg,#143c2d,#0a2119);
      box-shadow:var(--shadow);overflow:hidden;
    }
    .sun{
      position:absolute;width:110px;height:110px;border-radius:50%;
      background:radial-gradient(circle,#fff3ae 0%,#f4c86b 50%,rgba(244,200,107,.12) 68%,transparent 72%);
      right:46px;top:44px;
    }
    .hill{
      position:absolute;left:-8%;right:-8%;bottom:-18%;
      height:62%;border-radius:50% 50% 0 0;
      background:linear-gradient(180deg,#2a7a50,#103a29);
      transform:rotate(-4deg);
    }
    .house{
      position:absolute;left:50%;bottom:150px;
      transform:translateX(-50%);
      width:235px;height:160px;
      background:#e7efe8;border-radius:12px;
      box-shadow:0 24px 55px rgba(0,0,0,.35);
    }
    .roof{
      position:absolute;width:270px;height:90px;
      background:#305943;left:-18px;top:-55px;
      clip-path:polygon(50% 0,100% 100%,0 100%);
    }
    .solar{
      position:absolute;top:-29px;left:74px;width:110px;height:55px;
      background:repeating-linear-gradient(90deg,#173b52 0 21px,#2a6687 22px 24px);
      transform:skewY(22deg);
      border:3px solid #b7d7df;
    }
    .door{position:absolute;bottom:0;left:93px;width:48px;height:85px;background:#8f623f}
    .window{
      position:absolute;top:42px;width:52px;height:44px;background:#a8e1ee;
      border:6px solid #fff;
    }
    .w1{left:24px}.w2{right:24px}
    .tree{
      position:absolute;bottom:102px;width:72px;height:150px;
    }
    .tree:before{
      content:"";position:absolute;left:30px;bottom:0;width:14px;height:70px;background:#6b4d34;
    }
    .tree:after{
      content:"";position:absolute;left:0;top:0;width:72px;height:92px;border-radius:50%;
      background:radial-gradient(circle at 30% 30%,#6ed697,#2b8456);
    }
    .t1{left:45px}.t2{right:42px;transform:scale(.88)}
    .river{
      position:absolute;bottom:0;left:0;right:0;height:88px;
      background:linear-gradient(180deg,#3aa8b9,#1c7081);
      clip-path:polygon(0 28%,18% 10%,36% 35%,56% 8%,78% 30%,100% 12%,100% 100%,0 100%);
    }
    .chip{
      position:absolute;padding:12px 14px;border-radius:16px;
      background:rgba(6,24,18,.86);border:1px solid var(--line);
      backdrop-filter:blur(10px);font-size:.8rem;
    }
    .c1{top:150px;left:24px}.c2{top:240px;right:20px}.c3{bottom:28px;left:28px}

    section{padding:96px 0}
    .section-head{max-width:760px;margin-bottom:42px}
    h2{
      font-size:clamp(2.1rem,4vw,4rem);
      line-height:1.08;letter-spacing:-.04em;margin:10px 0 16px;
    }
    .section-head p{color:var(--muted)}

    .cards{
      display:grid;grid-template-columns:repeat(3,1fr);gap:18px;
    }
    .card{
      padding:28px;border-radius:var(--radius);
      background:linear-gradient(180deg,rgba(255,255,255,.055),rgba(255,255,255,.025));
      border:1px solid var(--line);
      transition:.25s ease;
    }
    .card:hover{transform:translateY(-6px);border-color:rgba(103,232,163,.35)}
    .icon{
      width:52px;height:52px;border-radius:17px;
      display:grid;place-items:center;margin-bottom:20px;
      background:rgba(103,232,163,.12);font-size:1.5rem;
    }
    .card h3{margin:0 0 10px;font-size:1.25rem}
    .card p{color:var(--muted);margin:0}

    .eco-layout{
      display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center;
    }
    .map{
      position:relative;min-height:520px;border-radius:32px;
      background:
        linear-gradient(45deg,rgba(255,255,255,.03) 25%,transparent 25%) 0 0/36px 36px,
        linear-gradient(-45deg,rgba(255,255,255,.025) 25%,transparent 25%) 0 0/36px 36px,
        #153826;
      border:1px solid var(--line);overflow:hidden;
    }
    .road{
      position:absolute;background:#b39d7b;border:8px solid #8b775d;border-radius:999px;
    }
    .r1{width:85%;height:42px;left:8%;top:48%;transform:rotate(-14deg)}
    .r2{width:42px;height:78%;left:48%;top:11%;transform:rotate(9deg)}
    .mini{
      position:absolute;width:54px;height:42px;background:#e8efe9;border-radius:6px;
      box-shadow:0 9px 16px rgba(0,0,0,.25);
    }
    .mini:before{
      content:"";position:absolute;left:-5px;top:-18px;width:64px;height:28px;
      background:#3d604b;clip-path:polygon(50% 0,100% 100%,0 100%);
    }
    .m1{left:14%;top:22%}.m2{left:31%;top:18%}.m3{right:18%;top:20%}
    .m4{left:18%;bottom:20%}.m5{right:34%;bottom:18%}.m6{right:12%;bottom:30%}
    .pond{
      position:absolute;width:120px;height:72px;border-radius:50%;
      background:#3f9fb0;right:10%;top:43%;border:7px solid #2e7357;
    }
    .farm{
      position:absolute;width:140px;height:90px;left:8%;top:55%;
      background:repeating-linear-gradient(90deg,#8dc46c 0 12px,#6aa64f 12px 24px);
      transform:rotate(-8deg);border-radius:10px;
    }
    .energy-hub{
      position:absolute;left:52%;top:24%;width:90px;height:90px;border-radius:50%;
      display:grid;place-items:center;background:#f1c75c;color:#1b2f22;font-weight:900;
      box-shadow:0 0 0 12px rgba(241,199,92,.14);
    }

    .flow{
      display:grid;gap:14px;
    }
    .flow-item{
      display:flex;gap:18px;align-items:flex-start;
      padding:22px;border-radius:20px;border:1px solid var(--line);
      background:rgba(255,255,255,.03);
    }
    .num{
      min-width:42px;height:42px;border-radius:50%;display:grid;place-items:center;
      background:var(--green);color:#062117;font-weight:900;
    }
    .flow-item h3{margin:0 0 5px}
    .flow-item p{margin:0;color:var(--muted)}

    .business{
      display:grid;grid-template-columns:repeat(4,1fr);gap:16px;
    }
    .biz{
      min-height:190px;padding:24px;border-radius:22px;
      border:1px solid var(--line);background:var(--panel);
    }
    .biz strong{display:block;font-size:2rem;color:var(--green);margin-bottom:8px}
    .biz p{color:var(--muted)}

    .cta{
      padding:54px;border-radius:34px;
      background:
        radial-gradient(circle at right top,rgba(244,200,107,.23),transparent 35%),
        linear-gradient(135deg,#184c37,#0d2d21);
      border:1px solid var(--line);
      display:flex;justify-content:space-between;align-items:center;gap:30px;
    }
    .cta h2{margin:0 0 10px;font-size:clamp(2rem,4vw,3.6rem)}
    .cta p{margin:0;color:var(--muted);max-width:700px}

    footer{
      padding:34px 0 46px;color:var(--muted);
      border-top:1px solid var(--line);font-size:.9rem;
    }
    .footer-flex{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}

    @media (max-width:900px){
      nav{display:none}
      .hero{min-height:auto;padding-top:56px}
      .hero-grid,.eco-layout{grid-template-columns:1fr}
      .visual{min-height:480px}
      .cards{grid-template-columns:1fr 1fr}
      .business{grid-template-columns:1fr 1fr}
      .cta{align-items:flex-start;flex-direction:column}
    }
    @media (max-width:600px){
      .wrap{width:min(94%,1180px)}
      .nav-btn{display:none}
      h1{font-size:3.25rem}
      .stats,.cards,.business{grid-template-columns:1fr}
      .visual{min-height:420px}
      .house{transform:translateX(-50%) scale(.82);bottom:125px}
      .tree{transform:scale(.75)}
      .t2{transform:scale(.68)}
      section{padding:72px 0}
      .cta{padding:34px 24px}
    }
  </style>
</head>
<body>

<header>
  <div class="wrap nav">
    <a class="brand" href="#home">
      <div class="logo">P</div>
      <div>
        PHOENIX UOS
        <small>Vacant House Ecology & Energy</small>
      </div>
    </a>

    <nav>
      <a href="#vision">비전</a>
      <a href="#system">핵심 시스템</a>
      <a href="#village">시범마을</a>
      <a href="#business">수익모델</a>
    </nav>

    <a class="nav-btn" href="#contact">프로젝트 문의</a>
  </div>
</header>

<main id="home">
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <div class="eyebrow">Regenerate Empty Homes</div>
        <h1>빈집을 다시<br><span>살아있는 생태계</span>로</h1>
        <p>
          Phoenix UOS는 방치된 빈집을 친환경 주거, 재생에너지,
          지역경제, AI 운영 시스템과 연결하여 새로운 마을 자산으로 전환합니다.
        </p>

        <div class="actions">
          <a class="btn" href="#village">20채 시범마을 보기</a>
          <a class="btn secondary" href="#system">생태계 구조 보기</a>
        </div>

        <div class="stats">
          <div class="stat"><strong>20 Homes</strong><span>1차 시범마을</span></div>
          <div class="stat"><strong>4 Systems</strong><span>주거·생태·에너지·AI</span></div>
          <div class="stat"><strong>1 Platform</strong><span>통합 운영 데이터</span></div>
        </div>
      </div>

      <div class="visual" aria-label="친환경 빈집 마을 비주얼">
        <div class="sun"></div>
        <div class="chip c1">AI 에너지 예측</div>
        <div class="chip c2">생태복원 데이터</div>
        <div class="chip c3">지역 수익 순환</div>
        <div class="tree t1"></div>
        <div class="tree t2"></div>
        <div class="house">
          <div class="roof"></div>
          <div class="solar"></div>
          <div class="window w1"></div>
          <div class="window w2"></div>
          <div class="door"></div>
        </div>
        <div class="hill"></div>
        <div class="river"></div>
      </div>
    </div>
  </section>

  <section id="vision">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">Our Vision</div>
        <h2>마을 전체를 하나의 살아있는 시스템으로</h2>
        <p>
          건물 한 채만 수리하는 것이 아니라, 빈집·숲·물·전력·사람·데이터가
          함께 순환하는 지속가능한 지역 생태계를 설계합니다.
        </p>
      </div>

      <div class="cards">
        <article class="card">
          <div class="icon">🏡</div>
          <h3>빈집 재생</h3>
          <p>노후 빈집을 조사하고 안전성, 활용성, 리모델링 비용을 분석합니다.</p>
        </article>
        <article class="card">
          <div class="icon">🌿</div>
          <h3>생태 복원</h3>
          <p>숲, 빗물정원, 텃밭, 소규모 습지를 통해 생물다양성을 회복합니다.</p>
        </article>
        <article class="card">
          <div class="icon">☀️</div>
          <h3>분산 에너지</h3>
          <p>태양광, ESS, EV 충전과 스마트 전력관리로 마을 에너지를 최적화합니다.</p>
        </article>
        <article class="card">
          <div class="icon">🧠</div>
          <h3>AI 운영</h3>
          <p>에너지 생산, 유지보수, 빈집 위험도와 수익을 하나의 화면에서 관리합니다.</p>
        </article>
        <article class="card">
          <div class="icon">🤝</div>
          <h3>지역 상생</h3>
          <p>주민, 청년, 귀촌인, 관광객, 디지털 노마드를 연결해 지역 수요를 만듭니다.</p>
        </article>
        <article class="card">
          <div class="icon">📊</div>
          <h3>데이터 자산</h3>
          <p>운영 성과와 생태·에너지 데이터를 축적해 투자 및 해외 확장 근거를 만듭니다.</p>
        </article>
      </div>
    </div>
  </section>

  <section id="system">
    <div class="wrap eco-layout">
      <div>
        <div class="section-head">
          <div class="eyebrow">Integrated System</div>
          <h2>Phoenix UOS 통합 생태계</h2>
          <p>빈집을 중심으로 에너지, 자연, 지역경제, 데이터를 한 구조 안에 배치합니다.</p>
        </div>

        <div class="flow">
          <div class="flow-item">
            <div class="num">01</div>
            <div><h3>빈집 조사와 소유주 협력</h3><p>지역 빈집 데이터와 소유주 동의를 기반으로 후보지를 선정합니다.</p></div>
          </div>
          <div class="flow-item">
            <div class="num">02</div>
            <div><h3>친환경 리모델링</h3><p>단열, 태양광, 자연환기, 물 재사용을 반영해 비용을 낮춥니다.</p></div>
          </div>
          <div class="flow-item">
            <div class="num">03</div>
            <div><h3>AI 운영과 유지보수</h3><p>전력, 시설, 이용률, 생태변화를 실시간으로 기록합니다.</p></div>
          </div>
          <div class="flow-item">
            <div class="num">04</div>
            <div><h3>수익과 지역 환원</h3><p>임대, 관광, 에너지, 농업, 플랫폼 수익을 지역과 공유합니다.</p></div>
          </div>
        </div>
      </div>

      <div class="map">
        <div class="road r1"></div>
        <div class="road r2"></div>
        <div class="mini m1"></div>
        <div class="mini m2"></div>
        <div class="mini m3"></div>
        <div class="mini m4"></div>
        <div class="mini m5"></div>
        <div class="mini m6"></div>
        <div class="farm"></div>
        <div class="pond"></div>
        <div class="energy-hub">ENERGY</div>
      </div>
    </div>
  </section>

  <section id="village">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">Pilot Village</div>
        <h2>20채 시범마을 실행안</h2>
        <p>
          첫 번째 목표는 작은 규모에서 빠르게 실증하는 것입니다.
          20채의 빈집을 기반으로 실제 에너지 생산, 생태복원 효과,
          소유주 만족도, 이용률과 운영수익을 측정합니다.
        </p>
      </div>

      <div class="cards">
        <article class="card"><div class="icon">1</div><h3>후보지 선정</h3><p>교통, 소유관계, 빈집 밀집도, 관광 가능성, 에너지 조건을 평가합니다.</p></article>
        <article class="card"><div class="icon">2</div><h3>5채 선도 리모델링</h3><p>대표 모델을 먼저 완성해 공사비와 운영방식을 검증합니다.</p></article>
        <article class="card"><div class="icon">3</div><h3>20채 확장</h3><p>주거, 체류형 관광, 창업공간, 커뮤니티 시설로 기능을 나눕니다.</p></article>
        <article class="card"><div class="icon">4</div><h3>성과 데이터화</h3><p>에너지, 탄소, 생태, 만족도, 매출을 투자자료로 축적합니다.</p></article>
        <article class="card"><div class="icon">5</div><h3>지자체 협력</h3><p>빈집정비, 귀촌, 관광, 신재생에너지 사업과 연계합니다.</p></article>
        <article class="card"><div class="icon">6</div><h3>해외 확장</h3><p>한국 실증 결과를 바탕으로 일본과 유럽의 지방소멸 지역으로 확장합니다.</p></article>
      </div>
    </div>
  </section>

  <section id="business">
    <div class="wrap">
      <div class="section-head">
        <div class="eyebrow">Business Model</div>
        <h2>하나의 마을에서 여러 수익이 발생합니다</h2>
        <p>단일 임대수익이 아니라 공간, 에너지, 관광, 데이터가 결합된 복합 수익구조입니다.</p>
      </div>

      <div class="business">
        <div class="biz"><strong>01</strong><h3>주거·장기임대</h3><p>귀촌인, 원격근무자, 장기체류자를 위한 친환경 주거.</p></div>
        <div class="biz"><strong>02</strong><h3>관광·체험</h3><p>지역문화, 생태체험, 농촌휴식, 소규모 숙박 프로그램.</p></div>
        <div class="biz"><strong>03</strong><h3>에너지 수익</h3><p>태양광 발전, ESS, EV 충전, 에너지 절감 효과.</p></div>
        <div class="biz"><strong>04</strong><h3>AI 플랫폼</h3><p>빈집 상태, 운영, 유지보수, 투자분석 데이터 서비스.</p></div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="wrap">
      <div class="cta">
        <div>
          <div class="eyebrow">Phoenix UOS</div>
          <h2>빈집을 다시 지역의 미래로</h2>
          <p>
            Phoenix UOS는 빈집 문제를 철거의 대상이 아니라,
            생태·에너지·지역경제를 만드는 새로운 기반으로 바라봅니다.
          </p>
        </div>
        <a class="btn" href="mailto:contact@phoenix-uos.com">프로젝트 문의하기</a>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="wrap footer-flex">
    <div>© 2026 Phoenix UOS. All rights reserved.</div>
    <div>Vacant House · Ecology · Energy · AI</div>
  </div>
</footer>

<script>
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
</script>

</body>
</html>
