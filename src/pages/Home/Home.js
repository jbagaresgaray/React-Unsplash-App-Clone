import React from "react";
import { useSelector } from "react-redux";

import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";
import Editorial from "./components/Editorial/Editorial";
import HomeCategories from "./components/HomeCategories/HomeCategories";
import HomeJumbotron from "./components/HomeJumbotron/HomeJumbotron";

import { topicsSelectors } from "../../stores/slices/topicsSlice";

import "./Home.scss";
import { useHistory } from "react-router";
import { ROUTES } from "../../router/routes";

const HomeScreen = () => {
  const TopicsArr = useSelector(topicsSelectors.topics);
  const isLoadingTopics = useSelector(topicsSelectors.isLoadingTopics);
  const history = useHistory();

  const onTopicPress = (id_or_slug) => {
    history.push(`${ROUTES.TOPICS}/${id_or_slug}`);
  };

  return (
    <div className="HomeScreen">
      <AppHeader />
      <main>
        <div className="mx-3">
          <HomeCategories
            showLoading={isLoadingTopics}
            topics={TopicsArr}
            onPress={onTopicPress}
          />
        </div>
        <HomeJumbotron />
        <Editorial />
      </main>
      <AppFooter />
    </div>
  );
};

export default HomeScreen;
