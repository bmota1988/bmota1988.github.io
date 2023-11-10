import React from "react";
import "./style/Header.css";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";

function Header() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  const handleDownload = () => {
    const documentURL = "./Resume - Bruno Mota.pdf";
    const link = document.createElement("a");
    link.href = documentURL;
    link.download = "Resume - Bruno Mota.pdf";
    link.click();
  };

  const handleCombined = () => {
    handleDownload();
    handleClick();
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          fixed="top"
          data-bs-theme="dark"
          className="bg-body-tertiary mb-3"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
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
                <hr />
                <Button
                  variant="success"
                  disabled={isLoading}
                  onClick={!isLoading ? handleCombined : null}
                  download
                >
                  {isLoading ? "Loading…" : "Resume"}
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
