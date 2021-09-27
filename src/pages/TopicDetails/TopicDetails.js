import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Masonry from "react-masonry-css";

import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";

import { MAX_PER_PAGE } from "../../constants";
import { getTopic, getTopicPhotos } from "../../stores/middleware/topic";
import { topicsSelectors } from "../../stores/slices/topicsSlice";

import "./TopicDetails.scss";
import AppCardItem from "../../components/AppCardItem";

function TopicDetailsScreen() {
  const params = useParams();
  const dispatch = useDispatch();
  const [idSlug, setIdSlug] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const isLoadingTopic = useSelector(topicsSelectors.isLoadingTopic);
  const isLoadingTopicPhotos = useSelector(
    topicsSelectors.isLoadingTopicPhotos
  );
  const topic = useSelector(topicsSelectors.topic);
  const TopicPhotos = useSelector(topicsSelectors.topicPhotos);

  useEffect(() => {
    if (params && params.id_or_slug) {
      setIdSlug(params.id_or_slug);

      dispatch(getTopic(params.id_or_slug));
      dispatch(
        getTopicPhotos({
          id_or_slug: params.id_or_slug,
          params: {
            page: currentPage,
            per_page: MAX_PER_PAGE,
            order_by: "latest",
          },
        })
      );
    }
  }, []);

  const fetchMoreData = async () => {
    console.log("fetchMoreData: ", currentPage);
    setCurrentPage(currentPage + 1);
    await dispatch(
      getTopicPhotos({
        id_or_slug: params.id_or_slug,
        params: {
          page: currentPage + 1,
          per_page: MAX_PER_PAGE,
          order_by: "latest",
        },
      })
    );
  };

  const onUserPress = (username) => {};

  const onImagePress = (id) => {};

  return (
    <div className="TopicDetailsScreen">
      <AppHeader />
      <main>
        <Container>
          <div className="py-5 text-left TopicDetailsScreen__Information">
            <h2>{topic.title}</h2>
            <div
              className="html"
              dangerouslySetInnerHTML={{
                __html: String(topic?.description),
              }}
            ></div>
          </div>
          <div className="py-5">
            <InfiniteScroll
              dataLength={TopicPhotos.length}
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
                {TopicPhotos.map((item, index) => (
                  <div key={index}>
                    <AppCardItem
                      item={item}
                      showLoading={isLoadingTopicPhotos}
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

export default TopicDetailsScreen;
