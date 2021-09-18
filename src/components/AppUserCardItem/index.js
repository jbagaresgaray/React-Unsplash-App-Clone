import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faCheckCircle,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import AppFastImage from "../AppFastImage";
import { IUser } from "../../constants/propTypes/user";

import "./AppUserCardItem.scss";

function AppUserCardItem({ user, tagline, onUserPress, onDownloadPress }) {
  return (
    <div className="AppUserCardItem">
      <div className="AppUserCardItem__user-wrapper">
        <div className="AppUserCardItem__user-avatar" onClick={onUserPress}>
          <AppFastImage uri={user?.profile_image?.small} />
        </div>
        <div className="AppUserCardItem__user-container">
          <h2 className="AppUserCardItem__user-container-name">{user?.name}</h2>
          {user?.for_hire && (
            <p className="AppUserCardItem__user-container-subname">
              Available for hire <FontAwesomeIcon icon={faCheckCircle} />
            </p>
          )}
          {tagline && (
            <p className="AppUserCardItem__user-container-subname">
              {tagline} <FontAwesomeIcon icon={faExternalLinkAlt} />
            </p>
          )}
        </div>
      </div>
      <Button variant="light">
        <FontAwesomeIcon icon={faDownload} />
      </Button>
    </div>
  );
}

AppUserCardItem.propTypes = {
  user: PropTypes.shape(IUser),
  onUserPress: PropTypes.func,
  onDownloadPress: PropTypes.func,
};

export default AppUserCardItem;
