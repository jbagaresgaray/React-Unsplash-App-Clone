import React from "react";
import { Container, Row } from "react-bootstrap";
import "./AppFooter.scss";

function AppFooter() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 AppFooter">
      <Container>
        <Row>
          <h5 className="AppFooter__header">Unsplash</h5>
          <div className="col-6 col-md">
            <ul className="list-unstyled text-small">
              <li className="mb-2">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://unsplash.com/about"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://unsplash.com/blog"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://unsplash.com/community"
                >
                  Community
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://unsplash.com/hiring"
                >
                  Join the team
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <ul className="list-unstyled text-small">
              <li className="mb-2">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://unsplash.com/developers"
                >
                  Developers/API
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://unsplash.com/press"
                >
                  Press
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://help.unsplash.com/"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <ul className="list-unstyled text-small">
              <li className="mb-2">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://unsplash.com/education"
                >
                  Unsplash for Education
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://unsplash.com/apps/ios"
                >
                  Unsplash for iOS
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://unsplash.com/apps"
                >
                  Official Apps
                </a>
              </li>
            </ul>
          </div>
        </Row>
        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <div className="AppFooter__container">
            <a href="/" title="Home — Unsplash">
              <img
                className="AppFooter__logo"
                src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"
              />
            </a>
            Make something awesome.
          </div>
          <ul className="list-unstyled d-flex align-items-center flex-row mb-0">
            <li className="ms-3">
              <a
                className="link-secondary text-decoration-none"
                href="https://unsplash.com/privacy"
              >
                Privacy Policy
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-secondary text-decoration-none"
                href="https://unsplash.com/terms"
              >
                Terms
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-secondary text-decoration-none"
                href="https://unsplash.com/security"
              >
                Security
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default AppFooter;
