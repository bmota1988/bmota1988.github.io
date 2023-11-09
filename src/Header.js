import React from "react";
import "./style/Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className="bg-body-tertiary navbar-position-fixed"
    >
      <Container>
        <Navbar.Collapse expand="lg" className="space-between">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <Button
          variant="success"
          href="./public/Resume - Bruno Mota.pdf"
          download
        >
          Resume
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
