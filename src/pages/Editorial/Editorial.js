import React from "react";
import { useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import { Container } from "react-bootstrap";

import AppCardItem from "../../components/AppCardItem";
import { photosSelectors } from "../../stores/slices/photosSlice";

import "./Editorial.scss";

function Editorial() {
  const PhotosArr = useSelector(photosSelectors.photos);
  const isLoadingPhotos = useSelector(photosSelectors.isLoadingPhotos);

  const onUserPress = (username) => {};

  const onImagePress = (id) => {};

  return (
    <div className="Editorial">
      <div className="album py-5 bg-light">
        <Container>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {PhotosArr.map((item, index) => (
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
        </Container>
      </div>
    </div>
  );
}

export default Editorial;
