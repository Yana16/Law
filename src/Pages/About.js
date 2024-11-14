import React from "react";
import { Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Container>
        <Row className="nav-link_about">
          <h1 className="nav-link_about"> ПРО НАС</h1>
          <p className="nav-link_about">
            Osiichuk Legal Firm – глобальний консорціум юристів, які
            обслуговують як фізичних осіб так і бізнесу. Ми надаємо повний
            спектр юридичних послуг та судове представництво як міжнародним так
            і вітчизняним клієнтам, як самостійно, так і через афілійованих
            партнерів в Україні, Німеччині та на Кіпрі. Команда складається з
            юристів – експертів, які мають успішний досвід в сфері супроводження
          </p>
        </Row>
      </Container>
    </>
  );
}
