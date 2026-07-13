export default function Home() {
  const menuStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 600,
  };

  const sectionStyle = {
    padding: "100px 40px",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "30px",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.08)",
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(7, 26, 43, 0.82)",
          backdropFilter: "blur(12px)",
        }}
      >
        <a
          href="#home"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "21px",
            fontWeight: 800,
            letterSpacing: "1px",
          }}
        >
          PHOENIX UOS
        </a>

        <nav
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <a href="#home" style={menuStyle}>
            HOME
          </a>
          <a href="#about" style={menuStyle}>
            회사소개
          </a>
          <a href="#business" style={menuStyle}>
            사업소개
          </a>
          <a href="#technology" style={menuStyle}>
            기술
          </a>
          <a href="#patent" style={menuStyle}>
            특허
          </a>
          <a href="#esg" style={menuStyle}>
            ESG
          </a>
          <a href="#contact" style={menuStyle}>
            문의하기
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #071a2b, #0b5b58)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "130px 40px 60px",
          }}
        >
          <div>
            <p
              style={{
                color: "#7ee0b8",
                fontSize: "18px",
                letterSpacing: "5px",
                fontWeight: 800,
              }}
            >
              PHOENIX UOS
            </p>

            <h1
              style={{
                fontSize: "56px",
                margin: "22px 0",
                lineHeight: 1.25,
              }}
            >
              빈집에서 시작하는
              <br />
              새로운 생태 에너지
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.8,
                color: "#d9f0e8",
                maxWidth: "760px",
                margin: "0 auto 38px",
              }}
            >
              방치된 빈집을 에너지 생산, 생태 복원, 지역 재생의 공간으로
              전환합니다.
            </p>

            <a
              href="#business"
              style={{
                display: "inline-block",
                backgroundColor: "#7ee0b8",
                color: "#08231f",
                textDecoration: "none",
                borderRadius: "30px",
                padding: "16px 30px",
                fontSize: "17px",
                fontWeight: 800,
              }}
            >
              프로젝트 알아보기
            </a>
          </div>
        </section>

        <section
          id="about"
          style={{
            ...sectionStyle,
            backgroundColor: "#ffffff",
            color: "#1d2b2a",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#0b7a67",
              fontWeight: 800,
              letterSpacing: "3px",
            }}
          >
            ABOUT US
          </p>

          <h2
            style={{
              fontSize: "42px",
              margin: "15px 0 28px",
            }}
          >
            회사소개
          </h2>

          <p
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: 1.9,
              fontSize: "19px",
              color: "#4d5f5c",
            }}
          >
            PHOENIX UOS는 방치된 빈집을 생태 에너지 생산 공간으로
            전환하는 프로젝트입니다.
            <br />
            AI, 신재생에너지, 생태복원, 지역재생을 하나의 플랫폼으로
            연결하여 지속가능한 미래를 만들어갑니다.
          </p>
        </section>

        <section
          id="business"
          style={{
            ...sectionStyle,
            backgroundColor: "#eef7f4",
            color: "#1d2b2a",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                color: "#0b7a67",
                fontWeight: 800,
                letterSpacing: "3px",
                textAlign: "center",
              }}
            >
              BUSINESS
            </p>

            <h2
              style={{
                fontSize: "42px",
                textAlign: "center",
                margin: "15px 0 45px",
              }}
            >
              사업소개
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px",
              }}
            >
              <div style={cardStyle}>
                <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>
                  빈집 재생
                </h3>
                <p style={{ lineHeight: 1.7, color: "#5c6d69" }}>
                  방치된 빈집을 친환경 에너지와 지역 재생의 거점으로
                  전환합니다.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>
                  신재생에너지
                </h3>
                <p style={{ lineHeight: 1.7, color: "#5c6d69" }}>
                  태양광, ESS, 에너지 관리 기술을 통합해 효율적인 운영
                  모델을 구축합니다.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>
                  생태복원
                </h3>
                <p style={{ lineHeight: 1.7, color: "#5c6d69" }}>
                  건물과 주변 환경을 함께 개선해 지속 가능한 생태 공간을
                  조성합니다.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>
                  지역경제 활성화
                </h3>
                <p style={{ lineHeight: 1.7, color: "#5c6d69" }}>
                  주민 참여와 지역 일자리를 통해 장기적인 수익 구조를
                  만듭니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="technology"
          style={{
            ...sectionStyle,
            backgroundColor: "#0d2a2f",
            color: "white",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#7ee0b8",
                fontWeight: 800,
                letterSpacing: "3px",
              }}
            >
              TECHNOLOGY
            </p>

            <h2
              style={{
                fontSize: "42px",
                margin: "15px 0 35px",
              }}
            >
              핵심기술
            </h2>

            <p
              style={{
                maxWidth: "850px",
                margin: "0 auto",
                fontSize: "19px",
                lineHeight: 1.9,
                color: "#d7e6e2",
              }}
            >
              AI 기반 에너지 수요 예측, 태양광 발전 관리, ESS 최적화,
              환경 데이터 분석을 통합하여 빈집 운영 효율을 높입니다.
            </p>
          </div>
        </section>

        <section
          id="patent"
          style={{
            ...sectionStyle,
            backgroundColor: "#ffffff",
            color: "#1d2b2a",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#0b7a67",
              fontWeight: 800,
              letterSpacing: "3px",
            }}
          >
            PATENT & IP
          </p>

          <h2
            style={{
              fontSize: "42px",
              margin: "15px 0 25px",
            }}
          >
            특허 및 지식재산
          </h2>

          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              fontSize: "19px",
              lineHeight: 1.9,
              color: "#53635f",
            }}
          >
            빈집 에너지 전환 시스템, AI 운영 플랫폼, 생태복원 모델과
            관련된 기술을 지식재산으로 보호하고 글로벌 사업 확장을
            준비합니다.
          </p>
        </section>

        <section
          id="esg"
          style={{
            ...sectionStyle,
            backgroundColor: "#e5f3ec",
            color: "#1d2b2a",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#0b7a67",
              fontWeight: 800,
              letterSpacing: "3px",
            }}
          >
            ESG
          </p>

          <h2
            style={{
              fontSize: "42px",
              margin: "15px 0 25px",
            }}
          >
            지속가능한 가치
          </h2>

          <p
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "19px",
              lineHeight: 1.9,
              color: "#53635f",
            }}
          >
            탄소 저감, 유휴 건축물 재생, 지역사회 참여, 투명한 운영을
            통해 환경과 사회에 긍정적인 가치를 창출합니다.
          </p>
        </section>

        <section
          id="contact"
          style={{
            ...sectionStyle,
            backgroundColor: "#071a2b",
            color: "white",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#7ee0b8",
              fontWeight: 800,
              letterSpacing: "3px",
            }}
          >
            CONTACT
          </p>

          <h2
            style={{
              fontSize: "42px",
              margin: "15px 0 25px",
            }}
          >
            문의하기
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 2,
              color: "#d3e5df",
            }}
          >
            사업 제휴, 투자, 기술 협력 문의를 환영합니다.
            <br />
            Email: contact@phoenix-uos.com
            <br />
            Website: phoenix-uos.com
          </p>
        </section>
      </main>

      <footer
        style={{
          backgroundColor: "#04111d",
          color: "#9fb3ad",
          textAlign: "center",
          padding: "28px 20px",
          fontSize: "14px",
        }}
      >
        © 2026 PHOENIX UOS. All rights reserved.
      </footer>
    </>
  );
}