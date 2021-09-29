import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "@restart/ui/esm/Dropdown";
import React from "react";
import { Button, SplitButton } from "react-bootstrap";
import PropTypes from "prop-types";
import AppUserCardItem from "../../../../components/AppUserCardItem";
import { IPhoto } from "../../../../constants/propTypes/photo";

import "./PhotoDetailsHeader.scss";


function PhotoDetailsHeader({ image, onDownloadPress, onUserPress }) {
  return (
    <div className="PhotoDetailsHeader">
      <div className="py-5 d-flex flex-row justify-content-between align-items-center">
        <div className="w-25">
          <div className="PhotoDetailsHeader__User">
            {image?.sponsorship !== null && (
              <AppUserCardItem
                user={image?.sponsorship?.sponsor}
                tagline={image?.sponsorship?.tagline}
                onMorePress={onDownloadPress}
                onUserPress={onUserPress}
              />
            )}
            {image?.sponsorship == null && (
              <AppUserCardItem
                user={image?.user}
                onMorePress={onDownloadPress}
                onUserPress={onUserPress}
              />
            )}
          </div>
        </div>
        <div>
          <Button variant="outline-secondary m-1">
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button variant="outline-secondary m-1">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <SplitButton
            variant="outline-secondary"
            title="Download"
            id="segmented-button-dropdown-2"
          >
            <Dropdown.Item href="#">Small</Dropdown.Item>
            <Dropdown.Item href="#">Medium</Dropdown.Item>
            <Dropdown.Item href="#">Large</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Original</Dropdown.Item>
          </SplitButton>
        </div>
      </div>
    </div>
  );
}

PhotoDetailsHeader.propTypes = {
  image: PropTypes.shape(IPhoto),
  onDownloadPress: PropTypes.func,
  onUserPress: PropTypes.func,
};

export default PhotoDetailsHeader;
