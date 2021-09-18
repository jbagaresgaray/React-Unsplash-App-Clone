import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

import "./HomeCategories.scss";

import HomeCategoryCard from "../HomeCategoryCard/HomeCategoryCard";
import { ITopic } from "../../../../constants/propTypes/topic";

function HomeCategories(props) {
  const { topics, onClick } = props;

  return (
    <div className="HomeCategories me-4">
      <div className="HomeCategories__Topics">
        {topics &&
          topics.map((topic, index) => (
            <HomeCategoryCard
              topic={topic}
              key={index}
              onClick={() => onClick(topic.id)}
            />
          ))}
      </div>
      <div className="HomeCategories__SeeAll">
        <OverlayTrigger
          key=""
          placement="bottom"
          overlay={<Tooltip id={`tooltip-bottom`}>See All Topics</Tooltip>}
        >
          <Button variant="link">
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
}

HomeCategories.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape(ITopic)),
  showLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default HomeCategories;
