import React from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faImage,
  faLayerGroup,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useHistory, useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import AppSearchBar from "../AppSearchBar";
import { ROUTES } from "../../router/routes";
import {
  searchActions,
  searchSelectors,
} from "../../stores/slices/searchSlice";

import "./AppHeader.scss";

function AppHeader() {
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const searchText = useSelector(searchSelectors.searchText);

  const onSubmitSearch = (e) => {
    const search = e.target.value;
    dispatch(searchActions.setSearchText(search));
    history.push(`${ROUTES.SEARCH}${ROUTES.PHOTO}/${search}`);
  };

  return (
    <header className="AppHeader fixed-top">
      <Navbar
        bg="light"
        expand="md"
        variant="light"
        className="px-5 AppHeader__Topics"
      >
        <Navbar.Brand as={Link} to={ROUTES.HOME}>
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
          <Nav defaultActiveKey={ROUTES.HOME} activeKey={match.path}>
            <Nav.Link as={Link} to={ROUTES.HOME} eventKey={ROUTES.HOME}>
              Editorial
            </Nav.Link>
            {/* <Nav.Link
              as={Link}
              to={ROUTES.FOLLOWING}
              eventKey={ROUTES.FOLLOWING}
            >
              Following
            </Nav.Link> */}
          </Nav>
          <div className="me-auto d-flex flex-grow-1">
            <AppSearchBar
              rounded
              onSubmit={onSubmitSearch}
              value={searchText}
            />
          </div>
          <Nav className="align-items-center ms-5">
            <Nav.Link as={Link} to={ROUTES.TOPICS} eventKey={ROUTES.TOPICS}>
              Topics
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={ROUTES.COLLECTIONS}
              eventKey={ROUTES.COLLECTIONS}
            >
              Collections
            </Nav.Link>
            <Nav.Link as={Link} to="#link" className="AppHeader__Notification">
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
      {searchText && (
        <Navbar
          bg="light"
          expand="md"
          variant="light"
          className="px-5 AppHeader__Search"
        >
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              defaultActiveKey={`${ROUTES.SEARCH}${ROUTES.PHOTO}`}
              activeKey={match.path}
            >
              <Nav.Link
                as={Link}
                to={`${ROUTES.SEARCH}${ROUTES.PHOTO}/${searchText}`}
              >
                <FontAwesomeIcon icon={faImage} />
                <span className="ms-1">Photos</span>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={`${ROUTES.SEARCH}${ROUTES.COLLECTIONS}/${searchText}`}
              >
                <FontAwesomeIcon icon={faLayerGroup} />
                <span className="ms-1">Collections</span>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={`${ROUTES.SEARCH}${ROUTES.USER}/${searchText}`}
              >
                <FontAwesomeIcon icon={faUsers} />
                <span className="ms-1">Users</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </header>
  );
}

export default AppHeader;
