import React from "react";
import { Container, Row } from "react-bootstrap";
import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";
import "./Following.scss";

function FollowingScreen() {
  return (
    <div className="FollowingScreen">
      <AppHeader />
      <main>
        <Container>
          <div className="py-5 text-left">
            <h2>Following Page</h2>
            <p className="lead">
              Explore the world through topics of beautiful photos free to use
              under the <br /> Unsplash License.
            </p>
          </div>
          <div className="py-5">
            <Row md="3" sm="2" className="row-cols-1 g-3"></Row>
          </div>
        </Container>
      </main>
      <AppFooter />
    </div>
  );
}

export default FollowingScreen;
