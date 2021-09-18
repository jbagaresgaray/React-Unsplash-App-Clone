import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';

import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";
import Editorial from "../Editorial/Editorial";
import HomeCategories from "./components/HomeCategories/HomeCategories";
import HomeJumbotron from "./components/HomeJumbotron/HomeJumbotron";

import { topicsSelectors } from "../../stores/slices/topicsSlice";

import "./Home.scss";

const HomeScreen = () => {
  const TopicsArr = useSelector(topicsSelectors.topics);
  const isLoadingTopics = useSelector(topicsSelectors.isLoadingTopics);

  const onTopicPress = (id_or_slug) => {};

  return (
    <div className="HomeScreen">
      <AppHeader />
      <main>
        <div className="mx-3">
          <HomeCategories
            showLoading={isLoadingTopics}
            topics={TopicsArr}
            onClick={onTopicPress}
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
