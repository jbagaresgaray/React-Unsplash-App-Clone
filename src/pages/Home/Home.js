import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import AppFooter from "../../components/AppFooter";
import { topicsSelectors } from "../../stores/slices/topicsSlice";
import Editorial from "../Editorial/Editorial";
import HomeCategories from "./components/HomeCategories/HomeCategories";

const HomeScreen = () => {
  const TopicsArr = useSelector(topicsSelectors.topics);
  const isLoadingTopics = useSelector(topicsSelectors.isLoadingTopics);

  const onTopicPress = (id_or_slug) => {};

  return (
    <div className="HomeScreen">
      <header>
        <Navbar bg="light" expand="md" variant="light">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Editorial</Nav.Link>
                <Nav.Link href="#link">Following</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <section class="py-5 text-center container">
          <HomeCategories
            showLoading={isLoadingTopics}
            topics={TopicsArr}
            onClick={onTopicPress}
          />
        </section>
        <Editorial />
      </main>
      <AppFooter />
    </div>
  );
};

export default HomeScreen;
