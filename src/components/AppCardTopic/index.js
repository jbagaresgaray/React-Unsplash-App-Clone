import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Image } from "react-bootstrap";
import AppFastImage from "../AppFastImage";

import { IPhoto, IPreviewPhotos } from "../../constants/propTypes/photo";

import "./AppCardTopic.scss";
import { IUser } from "../../constants/propTypes/user";
import AppStatus from "../AppStatus";

function AppCardTopic(props) {
  const {
    title,
    description,
    cover_photo,
    owners,
    total_photos,
    status,
  } = props;

  return (
    <Card className="AppCardTopic">
      <div className="AppCardTopic__card-image-container">
        <div className="AppCardTopic__card-image">
          <AppFastImage uri={cover_photo?.urls?.small} />
        </div>
        <div className="AppCardTopic__card-image-overlay">
          <AppStatus label={status} />
        </div>
      </div>
      <Card.Body>
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
        <div className="mt-3">
          <Card.Text className="card-description">{description}</Card.Text>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Button variant="outline-secondary" size="sm">
              View
            </Button>
            <Button variant="outline-secondary" size="sm">
              Edit
            </Button>
          </div>
          <small className="text-muted">{total_photos} contributions</small>
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
