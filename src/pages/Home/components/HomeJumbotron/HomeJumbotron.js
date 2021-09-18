import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AppSearchBar from "../../../../components/AppSearchBar";
import { ROUTES } from "../../../../router/routes";
import { photosSelectors } from "../../../../stores/slices/photosSlice";

import "./HomeJumbotron.scss";

function HomeJumbotron() {
  const randomPhoto = useSelector(photosSelectors.randomPhoto);

  return (
    <section
      className="HomeJumbotron py-4"
      style={{
        backgroundImage: `url(${randomPhoto?.urls?.full})`,
      }}
    >
      <Container>
        <div className="row">
          <div className="col-lg-8 col-md-8 mx-auto">
            <h1 className="HomeJumbotron__title">Unsplash</h1>
            <h3 className="HomeJumbotron__heading">
              The internet’s source of freely-usable images
            </h3>
            <p className="HomeJumbotron__heading mt-0">
              Powered by creators everywhere.
            </p>
            <div className="mt-3">
              <AppSearchBar />
            </div>
          </div>
        </div>
      </Container>
      <Row className="HomeJumbotron__footer mx-3">
        <Col lg={4}>
          <a href={`${ROUTES.PHOTO}/${randomPhoto?.id}`}>Photo of the Day</a>
          &nbsp;by&nbsp;
          <span>
            <a
              href={`${ROUTES.USER}/@${randomPhoto?.user?.username}`}
              className=""
            >
              {randomPhoto?.user?.name}
            </a>
          </span>
        </Col>
        <Col lg={4} className="text-center">
          Read more about the &nbsp;
          <a href="https://unsplash.com/license" className="" target="_blank" rel="noreferrer">
            Unsplash License
          </a>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </section>
  );
}

export default HomeJumbotron;
