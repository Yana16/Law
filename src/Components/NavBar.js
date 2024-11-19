import React from "react";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import Logo from "./images/Logo.png";
import ModalWindow from "./Modal/ModalWindow";
import { Form } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="header">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              height="50"
              width="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Головна</Nav.Link>
              <Nav.Link href="/about">Про нас</Nav.Link>
              <Nav.Link href="/practice">Практика</Nav.Link>
              <NavDropdown title="Контакти" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://t.me/Tetyana_Osiychuk">
                  Telegram
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.facebook.com/tanja.osijtschuk">
                  Facebook
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/tetiana-osiichuk-429742149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  LinkedIn
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <ModalWindow />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar expand="lg" className="header">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              height="50"
              width="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <ModalWindow />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto header__menu">
              <Nav.Link href="/">Головна</Nav.Link>
              <Nav.Link href="/about">Про нас</Nav.Link>
              <Nav.Link href="/practice">Практика</Nav.Link>
              <NavDropdown title="Контакти" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://t.me/Tetyana_Osiychuk">
                  Telegram
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.facebook.com/tanja.osijtschuk">
                  Facebook
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/tetiana-osiichuk-429742149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  LinkedIn
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
}
