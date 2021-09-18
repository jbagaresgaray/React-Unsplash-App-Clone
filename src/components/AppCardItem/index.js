import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

import AppFastImage from "../AppFastImage";
import { IPhoto } from "../../constants/propTypes/photo";

import "./AppCardItem.scss";
import AppUserCardItem from "../AppUserCardItem";

function AppCardItem(props) {
  const { item, onUserPress, onDownloadPress, onImagePress } = props;

  return (
    <div className="AppCardItem card shadow-none" onClick={onImagePress}>
      <div className="AppCardItem__card-header">
        <div className="AppCardItem__user-container">
          {item?.sponsorship && (
            <>
              <h2 className="AppCardItem__user-container-name">Sponsored</h2>
              <p className="AppCardItem__user-container-subname">
                Collaboration with {item?.user?.name}
              </p>
            </>
          )}
        </div>
        <div className="AppCardItem__btn-group">
          <Button variant="light">
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button variant="light">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>
      </div>
      <AppFastImage uri={item?.urls?.small} />
      <div className="AppCardItem__card-body">
        {item?.sponsorship !== null && (
          <AppUserCardItem
            user={item?.sponsorship?.sponsor}
            tagline={item?.sponsorship?.tagline}
            onMorePress={onDownloadPress}
            onUserPress={onUserPress}
          />
        )}
        {item?.sponsorship == null && (
          <AppUserCardItem
            user={item?.user}
            onMorePress={onDownloadPress}
            onUserPress={onUserPress}
          />
        )}
      </div>
    </div>
  );
}

AppCardItem.propTypes = {
  item: PropTypes.shape(IPhoto),
  showLoading: PropTypes.bool,
  onUserPress: PropTypes.func,
  onMorePress: PropTypes.func,
  onImagePress: PropTypes.func,
};

export default AppCardItem;
