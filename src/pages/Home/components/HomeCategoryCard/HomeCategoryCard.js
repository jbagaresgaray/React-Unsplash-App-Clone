import React from "react";
import PropTypes from "prop-types";

import "./HomeCategoryCard.scss";
import AppFastImage from "../../../../components/AppFastImage";
import { ITopic } from "../../../../constants/propTypes/topic";

function HomeCategoryCard(props) {
  const { topic, onClick } = props;

  return (
    <div className="HomeCategoryCard">
      <div className="HomeCategoryCard__image-container">
        <div className="HomeCategoryCard__image-wrapper" onClick={onClick}>
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
