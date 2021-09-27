import React from "react";
import PropTypes from "prop-types";
import { Card, Image } from "react-bootstrap";
import AppFastImage from "../AppFastImage";

import { IPhoto, IPreviewPhotos } from "../../constants/propTypes/photo";

import "./AppCardTopic.scss";
import { IUser } from "../../constants/propTypes/user";
import AppStatus from "../AppStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

function AppCardTopic(props) {
  const {
    title,
    description,
    cover_photo,
    owners,
    total_photos,
    status,
    onPress,
  } = props;

  return (
    <Card className="AppCardTopic" onClick={onPress}>
      <div className="AppCardTopic__card-image-container">
        <div className="AppCardTopic__card-image">
          <AppFastImage uri={cover_photo?.urls?.small} />
        </div>
        <div className="AppCardTopic__card-image-overlay">
          <AppStatus label={status} />
        </div>
      </div>
      <Card.Body className="mx-3 my-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <Card.Title>{title}</Card.Title>
            <Card.Text className="card-subtitle">by {owners?.name}</Card.Text>
          </div>
          <Image
            className="AppCardTopic__card-avatar"
            src={owners?.profile_image?.medium}
            roundedCircle
          />
        </div>
        <div className="my-3">
          <Card.Text
            className="card-description"
            dangerouslySetInnerHTML={{
              __html: String(description),
            }}
          />
        </div>
        <div className="AppCardTopic__Footer">
          <FontAwesomeIcon icon={faImage} />
          {total_photos} contributions
        </div>
      </Card.Body>
    </Card>
  );
}

AppCardTopic.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cover_photo: PropTypes.shape(IPhoto),
  owners: PropTypes.shape(IUser),
  preview_photos: PropTypes.arrayOf(PropTypes.shape(IPreviewPhotos)),
  total_photos: PropTypes.number,
  status: PropTypes.string,
  featured: PropTypes.bool,
  onUserPress: PropTypes.func,
  onPress: PropTypes.func,
};

export default AppCardTopic;
