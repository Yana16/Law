import React from "react";
import "../Components/Main/Main.scss";
import { Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Container className="about">
        <Row>
          <h1 className="nav-link_about"> ПРО НАС</h1>
          <span className="about__details__text ">
            <span className=" about__text__dec ">Osiichuk Legal Firm</span>- це
            команда досвідчених фахівців, готових захистити ваші інтереси та
            забезпечити успіх у будь-якій правовій ситуації.
            <Row>
              <h3 className="mb-5 mt-5  about__details__label">
                НАШІ ПЕРЕВАГИ:
              </h3>

              <p>
                • Повний спектр юридичних послуг для фізичних осіб та бізнесу
              </p>
              <p>
                • Професійний супровід та судове представництво в Україні та за
                кордоном
              </p>
              <p>
                • Міжнародна мережа партнерів в Україні, Європейському Союзі,
                США та Британії
              </p>

              <p>
                • Індивідуальний підхід та ефективні рішення навіть у
                найскладніших справах
              </p>
              <p>
                • Індивідуальний підхід та ефективні рішення навіть у
                найскладніших справах
              </p>
              <p>
                • Прозорість, чесність та конфіденційність на всіх етапах
                співпраці
              </p>

              <Row className="mt-5 mb-5">
                <h3 className="mb-5 text-uppercase about__details__label">
                  Довірте свої правові питання експертам
                  <span className="about__text__dec ">Osiichuk Legal Firm</span>
                  і отримайте:
                </h3>
                <p>✓ Надійний захист ваших інтересів</p>
                <p>✓ Оперативне вирішення юридичних проблем</p>
                <p>
                  ✓ Економію часу та ресурсів Osiichuk Legal Firm - ваш надійний
                  радник у всіх юридичних питаннях.
                </p>
              </Row>
              <span className="landing__details__label-bar1"></span>
            </Row>
          </span>
        </Row>
      </Container>
    </>
  );
}
