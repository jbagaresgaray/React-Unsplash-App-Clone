import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
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
import TopicDetailStatus from "./components/TopicDetailStatus";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import { ROUTES } from "../../router/routes";

function TopicDetailsScreen() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);

  const isLoadingTopics = useSelector(topicsSelectors.isLoadingTopics);
  const isLoadingTopic = useSelector(topicsSelectors.isLoadingTopic);
  const isLoadingTopicPhotos = useSelector(
    topicsSelectors.isLoadingTopicPhotos
  );
  const topic = useSelector(topicsSelectors.topic);
  const TopicPhotos = useSelector(topicsSelectors.topicPhotos);
  const TopicsArr = useSelector(topicsSelectors.topics);

  console.log("topic: ", topic);

  useEffect(() => {
    if (params && params.id_or_slug) {
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

    window.scrollTo(0, 0);
  }, [dispatch, params, currentPage]);

  const fetchMoreData = async () => {
    console.log("fetchMoreData: ", currentPage);
    setCurrentPage(currentPage + 1);
  };

  const onUserPress = (username) => {};

  const onImagePress = (id) => {};

  const onTopicPress = (id_or_slug) => {
    history.push(`${ROUTES.TOPICS}/${id_or_slug}`);
  };

  const renderPhotos = () => {
    return (
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
    );
  };

  return (
    <div className="TopicDetailsScreen">
      <AppHeader />
      <main>
        <div className="mx-3">
          <HomeCategories
            showLoading={isLoadingTopics}
            topics={TopicsArr}
            onPress={onTopicPress}
          />
        </div>
        <Container>
          <Row className="g-3">
            <Col xs={8} md={8}>
              <div className="py-3 text-left TopicDetailsScreen__Information">
                {!isLoadingTopic && (
                  <>
                    <h1>{topic?.title}</h1>
                    <h2
                      className="html"
                      dangerouslySetInnerHTML={{
                        __html: String(topic?.description),
                      }}
                    ></h2>
                  </>
                )}
              </div>
            </Col>
            <Col xs={4} md={4}>
              <div className="py-5">
                <TopicDetailStatus
                  topic={topic}
                  showLoading={isLoadingTopic}
                  onUserPress={onUserPress}
                />
              </div>
            </Col>
          </Row>
          {!isLoadingTopicPhotos && renderPhotos()}
        </Container>
      </main>
      <AppFooter />
    </div>
  );
}

export default TopicDetailsScreen;
