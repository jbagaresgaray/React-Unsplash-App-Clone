import React from "react";
import PropTypes from "prop-types";
import { Card, ListGroup, Button } from "react-bootstrap";
import {
  faBolt,
  faImage,
  faUserCircle,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ITopic } from "../../../../constants/propTypes/topic";

import AppStatus from "../../../../components/AppStatus";
import AppAvatar from "../../../../components/AppAvatar";

import "./TopicDetailStatus.scss";

function TopicDetailStatus({ topic, showLoading, onUserPress }) {
  return (
    <div className="TopicDetailStatus">
      <Card>
        <ListGroup variant="flush" className="p-3">
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="TopicDetailStatus__Block">
              <FontAwesomeIcon icon={faBolt} />
              <span>Status</span>
            </div>
            <AppStatus label={topic?.status} />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="TopicDetailStatus__Block">
              <FontAwesomeIcon icon={faUserCircle} />
              <span>Curator</span>
            </div>
            <AppAvatar
              uri={topic?.owners[0]?.profile_image?.small}
              width={32}
              height={32}
            />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="TopicDetailStatus__Block">
              <FontAwesomeIcon icon={faImage} />
              <span>Contributions</span>
            </div>
            <span className="TopicDetailStatus__Contributions">
              {topic?.total_photos}
            </span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="TopicDetailStatus__Block">
              <FontAwesomeIcon icon={faUserFriends} />
              <span>Top contributors</span>
            </div>
            <div className="TopicDetailStatus__Users">
              {topic?.top_contributors &&
                topic?.top_contributors.map((item, index) => (
                  <AppAvatar
                    key={index}
                    width={21}
                    height={21}
                    uri={item.profile_image?.small}
                    onClick={() => onUserPress(String(item?.username))}
                  />
                ))}
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <div className="d-grid gap-2 mt-3">
        <Button variant="dark">
          Submit to <strong>{topic?.title}</strong>
        </Button>
      </div>
    </div>
  );
}

TopicDetailStatus.propTypes = {
  topic: PropTypes.shape(ITopic),
  showLoading: PropTypes.bool,
  onUserPress: PropTypes.func,
};

export default TopicDetailStatus;
