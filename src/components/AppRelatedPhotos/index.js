import React from "react";
import Masonry from "react-masonry-css";
import PropTypes from "prop-types";
import AppCardItem from "../AppCardItem";
import { IPhoto } from "../../constants/propTypes/photo";

import "./AppRelatedPhotos.scss";

function AppRelatedPhotos({
  photos,
  isLoadingPhotos,
  onUserPress,
  onImagePress,
}) {
  return (
    <div className="AppRelatedPhotos">
      <div className="py-5 text-left">
        <h2>Related Photos</h2>
      </div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((item, index) => (
          <div key={index}>
            <AppCardItem
              item={item}
              showLoading={isLoadingPhotos}
              onUserPress={() => onUserPress(item?.user?.username)}
              onImagePress={() => onImagePress(item.id)}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

AppRelatedPhotos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape(IPhoto)),
  isLoadingPhotos: PropTypes.bool,
  onUserPress: PropTypes.func,
  onImagePress: PropTypes.func,
};

AppRelatedPhotos.defaultProps = {
  photos: [],
  isLoadingPhotos: false,
};

export default AppRelatedPhotos;
