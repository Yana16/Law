import React from "react";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import Logo from "./images/Logo.png";
import ModalWindow from "./Modal/ModalWindow";

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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto header__menu">
              <Nav.Link href="/">Головна</Nav.Link>
              <Nav.Link href="/about">Про нас</Nav.Link>
              <NavDropdown title="Контакти" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Telegram</NavDropdown.Item>
                <NavDropdown.Item href="https://www.facebook.com/tanja.osijtschuk">
                  Facebook
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/tetiana-osiichuk-429742149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  LinkedIn
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <ModalWindow />
        </Container>
      </Navbar>
    </>
  );
}
