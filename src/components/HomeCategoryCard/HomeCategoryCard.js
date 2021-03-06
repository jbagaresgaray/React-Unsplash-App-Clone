import React from "react";
import PropTypes from "prop-types";

import "./HomeCategoryCard.scss";
import AppFastImage from "../AppFastImage";
import { ITopic } from "../../constants/propTypes/topic";

function HomeCategoryCard(props) {
  const { topic, onPress } = props;

  return (
    <div className="HomeCategoryCard">
      <div className="HomeCategoryCard__image-container">
        <div className="HomeCategoryCard__image-wrapper" onClick={onPress}>
          <AppFastImage uri={topic?.cover_photo?.urls.small} />
        </div>
        <div className="HomeCategoryCard__image-title">
          <p>{topic?.title}</p>
        </div>
      </div>
    </div>
  );
}

HomeCategoryCard.propTypes = {
  topic: PropTypes.shape(ITopic),
  onClick: PropTypes.func,
};

export default HomeCategoryCard;
