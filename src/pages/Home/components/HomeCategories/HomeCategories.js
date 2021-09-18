import React from "react";
import PropTypes from "prop-types";

import "./HomeCategories.scss";

import HomeCategoryCard from "../HomeCategoryCard/HomeCategoryCard";
import { ITopic } from "../../../../constants/propTypes/topic";

function HomeCategories(props) {
  const { topics, showLoading, onClick } = props;
  return (
    <div className="HomeCategories">
      {topics &&
        topics.map((topic, index) => (
          <HomeCategoryCard
            topic={topic}
            key={index}
            onClick={() => onClick(topic.id)}
          />
        ))}
    </div>
  );
}

HomeCategories.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape(ITopic)),
  showLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default HomeCategories;
