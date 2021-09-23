import React from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import "./AppHeader.scss";
import AppSearchBar from "../AppSearchBar";
import { ROUTES } from "../../router/routes";

function AppHeader() {
  return (
    <header className="AppHeader fixed-top">
      <Navbar
        bg="light"
        expand="md"
        variant="light"
        className="px-5 AppHeader__Topics"
      >
        <Navbar.Brand href={ROUTES.HOME}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            version="1.1"
            aria-labelledby="unsplash-home"
            aria-hidden="false"
          >
            <title id="unsplash-home">Unsplash Home</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href={ROUTES.HOME}>Editorial</Nav.Link>
            <Nav.Link href={ROUTES.FOLLOWING}>Following</Nav.Link>
          </Nav>
          <div className="me-auto d-flex flex-grow-1">
            <AppSearchBar rounded />
          </div>
          <Nav className="align-items-center ms-5">
            <Nav.Link href={ROUTES.TOPICS}>Topics</Nav.Link>
            <Nav.Link href={ROUTES.COLLECTIONS}>Collections</Nav.Link>
            <Nav.Link href="#link" className="AppHeader__Notification">
              <Button variant="link">
                <FontAwesomeIcon icon={faBell} size="lg" />
              </Button>
            </Nav.Link>
            <Nav.Link href="#link">
              <Image
                src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                roundedCircle
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default AppHeader;
