import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import { Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import AppCardItem from "../../../../components/AppCardItem";
import { photosSelectors } from "../../../../stores/slices/photosSlice";

import "./Editorial.scss";
import { fetchListPhotos } from "../../../../stores/middleware/photos";
import { MAX_PER_PAGE } from "../../../../constants";

function Editorial() {
  const dispatch = useDispatch();
  const PhotosArr = useSelector(photosSelectors.photos);
  const isLoadingPhotos = useSelector(photosSelectors.isLoadingPhotos);
  const [currentPage, setPageNumber] = useState(1);

  const onUserPress = (username) => {};

  const onImagePress = (id) => {};

  const fetchMoreData = async () => {
    console.log("fetchMoreData: ", currentPage);
    setPageNumber(currentPage + 1);
    await dispatch(
      fetchListPhotos({
        page: currentPage + 1,
        per_page: MAX_PER_PAGE,
        order_by: "latest",
      })
    );
  };

  return (
    <div className="Editorial">
      <div className="album py-5 bg-light">
        <Container>
          <InfiniteScroll
            dataLength={PhotosArr.length}
            next={fetchMoreData}
            hasMore={true}
            loader={
              <div className="d-flex justify-content-center my-5">
                <FontAwesomeIcon icon={faCircleNotch} spin size="2x" />
              </div>
            }
          >
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
          </InfiniteScroll>
        </Container>
      </div>
    </div>
  );
}

export default Editorial;
