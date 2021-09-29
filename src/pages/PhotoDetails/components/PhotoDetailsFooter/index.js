import { faCalendar, faInfoCircle, faMapMarkerAlt, faShare, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import moment from "moment";
import { Button } from "react-bootstrap";

import "./PhotoDetailsFooter.scss";

function PhotoDetailsFooter({ image }) {
  return (
    <div className="PhotoDetailsFooter">
      <div className="py-5">
        <div className="PhotoDetailsFooter__Stats_Info">
          <div className="PhotoDetailsFooter__Stats">
            <div className="mr-4">
              <h3>Views</h3>
              <p className="lead">{image?.views}</p>
            </div>
            <div className="mx-4">
              <h3>Downloads</h3>
              <p className="lead">{image?.downloads}</p>
            </div>
            <div className="mx-4">
              <h3>Featured in</h3>
              <div className="d-flex flex-row align-items-center">
                <p className="lead">
                  Editorial
                  {image?.topics && <span>,</span>}
                </p>
                {image?.topics.map((item, index) => (
                  <p className="lead ms-1" key={index}>
                    {item?.title},{" "}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <Button variant="outline-secondary m-1">
              <FontAwesomeIcon icon={faShare} />
              &nbsp;Share
            </Button>
            <Button variant="outline-secondary m-1">
              <FontAwesomeIcon icon={faInfoCircle} />
              &nbsp;Info
            </Button>
          </div>
        </div>
        <div className="PhotoDetailsFooter__Info">
          <div className="d-block w-25">
            {image?.location?.title && (
              <div className="PhotoDetailsFooter__Info__items">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{image?.location?.title}</span>
              </div>
            )}
            <div className="PhotoDetailsFooter__Info__items">
              <FontAwesomeIcon icon={faCalendar} />
              <span>
                Published on
                {moment(new Date(image?.created_at)).format("MMMM DD, YYYY")}
              </span>
            </div>
            <a
              className="PhotoDetailsFooter__Info__items"
              href="https://unsplash.com/license"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faShieldAlt} />
              <span>Free to use under the Unsplash License</span>
            </a>
          </div>
          <div className="d-block">
            <p className="PhotoDetailsFooter__Description">
              {image?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoDetailsFooter;
