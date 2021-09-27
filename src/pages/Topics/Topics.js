import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import AppCardTopic from "../../components/AppCardTopic";
import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";
import { ROUTES } from "../../router/routes";
import { topicsSelectors } from "../../stores/slices/topicsSlice";

import "./Topics.scss";

const TopicScreen = () => {
  const history = useHistory();
  const TopicsArr = useSelector(topicsSelectors.topics);
  const [featuredTopic, setFeaturedTopic] = useState({});


  useEffect(() => {
    if (TopicsArr) {
      const featTopic = TopicsArr.find((item) => item.featured);
      setFeaturedTopic(featTopic);
    }
  }, [TopicsArr]);

  const onTopicPress = (id_or_slug) => {
    history.push(`${ROUTES.TOPICS}/${id_or_slug}`);
  };

  const onUserPress = (username) => {};

  return (
    <div className="TopicsScreen">
      <AppHeader />
      <main>
        <Container>
          <div className="py-5 text-left TopicsScreen__Header">
            <h1>Topics</h1>
            <p className="lead">
              Explore the world through topics of beautiful photos free to use
              under the <br /> Unsplash License.
            </p>
          </div>
          <div className="py-2 text-left TopicsScreen__Featured">
            <h2>Featured</h2>
          </div>
          <div className="py-2">
            <Row md="3" sm="2" className="row-cols-1 g-3">
              {featuredTopic && (
                <Col>
                  <AppCardTopic
                    title={featuredTopic.title}
                    description={featuredTopic.description}
                    cover_photo={featuredTopic.cover_photo}
                    owners={featuredTopic?.owners && featuredTopic?.owners[0]}
                    total_photos={featuredTopic?.total_photos}
                    status={featuredTopic?.status}
                    onPress={() => onTopicPress(featuredTopic.id)}
                    onUserPress={() =>
                      onUserPress(featuredTopic?.user?.username)
                    }
                  />
                </Col>
              )}
            </Row>
          </div>
          <div className="pt-5 pb-2 text-left TopicsScreen__Featured">
            <h2>All Topics</h2>
          </div>
          <div className="py-5">
            <Row md="3" sm="2" className="row-cols-1 g-3">
              {TopicsArr.map((topic, index) => (
                <Col key={index}>
                  <AppCardTopic
                    title={topic.title}
                    description={topic.description}
                    cover_photo={topic.cover_photo}
                    owners={topic?.owners[0]}
                    total_photos={topic?.total_photos}
                    status={topic?.status}
                    onPress={() => onTopicPress(topic.id)}
                    onUserPress={() => onUserPress(topic?.user?.username)}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </main>
      <AppFooter />
    </div>
  );
};

export default TopicScreen;
