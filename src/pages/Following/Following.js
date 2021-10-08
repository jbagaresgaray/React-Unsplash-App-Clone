import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";
import AppCardItem from "../../components/AppCardItem";

import { feedsSelectors } from "../../stores/slices/feedsSlice";
import { fetchFollowings } from "../../stores/middleware/feeds";

import { MAX_PER_PAGE } from "../../constants";

import "./Following.scss";



function FollowingScreen() {
  const dispatch = useDispatch();
  const Followings = useSelector(feedsSelectors.followings);
  const isLoadingFollowing = useSelector(feedsSelectors.isLoadingFollowing);
  const [currentPage, setPageNumber] = useState(1);

  const onUserPress = (username) => {};

  const onImagePress = (id) => {};

  const fetchMoreData = async () => {
    console.log("fetchMoreData: ", currentPage);
    setPageNumber(currentPage + 1);
    await dispatch(
      fetchFollowings({
        page: currentPage + 1,
        per_page: MAX_PER_PAGE,
        order_by: "latest",
      })
    );
  };

  return (
    <div className="FollowingScreen">
      <AppHeader />
      <main>
        <Container>
          <div className="py-5 text-left">
            <h2>Following Page</h2>
            <p className="lead">
              The latest photos from photographers you follow.
            </p>
          </div>
          <div className="py-5">
            <InfiniteScroll
              dataLength={Followings.length}
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
                {Followings.map((item, index) => (
                  <div key={index}>
                    <AppCardItem
                      item={item}
                      showLoading={isLoadingFollowing}
                      onUserPress={() => onUserPress(item?.user?.username)}
                      onImagePress={() => onImagePress(item.id)}
                    />
                  </div>
                ))}
              </Masonry>
            </InfiniteScroll>
          </div>
        </Container>
      </main>
      <AppFooter />
    </div>
  );
}

export default FollowingScreen;
