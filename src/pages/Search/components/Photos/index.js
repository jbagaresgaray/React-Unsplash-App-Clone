import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { size } from "lodash";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { MAX_PER_PAGE } from "../../../../constants";
import { searchPhotosQry } from "../../../../stores/middleware/search";
import { searchSelectors } from "../../../../stores/slices/searchSlice";

import AppCardItem from "../../../../components/AppCardItem";

import "./Photos.scss";

function SearchPhotos() {
  const params = useParams();
  const dispatch = useDispatch();
  const PhotosArr = useSelector(searchSelectors.searchPhotos);
  const isLoadingPhotos = useSelector(searchSelectors.isLoadingSearchPhotos);
  const [currentPage, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  const onUserPress = (username) => {};

  const onImagePress = (id) => {};

  const fetchMoreData = async () => {
    console.log("fetchMoreData: ", currentPage);
    setPageNumber(currentPage + 1);
    await dispatch(
      searchPhotosQry({
        query: search,
        page: currentPage,
        per_page: MAX_PER_PAGE,
      })
    );
  };

  useEffect(() => {
    const query = params.search;
    setSearch(query);

    dispatch(
      searchPhotosQry({
        query,
        page: 1,
        per_page: MAX_PER_PAGE,
      })
    );
  }, [dispatch, params]);

  return (
    <div className="SearchPhotos">
      <div className="album py-5 bg-light">
        <Container>
          <InfiniteScroll
            dataLength={size(PhotosArr)}
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
              {PhotosArr &&
                PhotosArr.map((item, index) => (
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

export default SearchPhotos;
