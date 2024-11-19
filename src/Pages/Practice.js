import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Practice() {
  return (
    <Container>
      <Row>
        <h1 className="nav-link_about">СУДОВА ПРАКТИКА</h1>
        <Row className="mb-5 mt-5 link_about">
          <a
            href="https://jurliga.ligazakon.net/intervyu/229433_noviy-pretsedent-verkhovnogo-sudu-v-sporakh-pro-zakhist-chest-gdnost-ta-dlovo-reputats"
            className="link mb-3 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Новий прецедент Верховного Суду в спорах про захист честі, гідності
            та ділової репутації
          </a>
          <a
            href="https://jurliga.ligazakon.net/analitycs/196662_sudova-praktika-u-sporakh-pro-zakhist-chest-gdnost--dlovo-reputats-osobi-abo-ne-odnoyu-postanovoyu-plenumu-vsu-1-vd-27022009-roku-zhive-yuridichna-splnota"
            className="link mb-3 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Судову практику проаналізували Тетяна Осійчук, адвокат ТОВ
            «ЛІГА:ЗАКОН», та Ірина Кепич, адвокат АО "Коларес"
          </a>
          <a
            href="https://jurliga.ligazakon.net/news/195905_skhilennya-do-boykotu-subkta-gospodaryuvannya-praktichniy-aspekt"
            className="link b-3 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Схилення до бойкоту суб’єкта господарювання. Практичний аспект
          </a>
        </Row>
        <span className="landing__details__label-bar1"></span>
      </Row>
    </Container>
  );
}
