import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <header>
        <Navbar bg="light" expand="md" variant="light">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link disabled>Disabled</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default HomeScreen;
