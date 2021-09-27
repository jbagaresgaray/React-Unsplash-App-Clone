import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

import "./HomeCategories.scss";

import HomeCategoryCard from "../HomeCategoryCard/HomeCategoryCard";
import { ITopic } from "../../constants/propTypes/topic";

import { ROUTES } from "../../router/routes";

function HomeCategories(props) {
  const { topics, onPress } = props;
  const history = useHistory();

  const onSeeAllTopics = () => {
    console.log("onSeeAllTopics");
    history.push(ROUTES.TOPICS);
  };

  return (
    <div className="HomeCategories me-4">
      <div className="HomeCategories__Topics">
        {topics &&
          topics.map((topic, index) => (
            <HomeCategoryCard
              topic={topic}
              key={index}
              onPress={() => onPress(topic.id)}
            />
          ))}
      </div>
      <div className="HomeCategories__SeeAll">
        <Button variant="link" onClick={onSeeAllTopics}>
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </Button>
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
