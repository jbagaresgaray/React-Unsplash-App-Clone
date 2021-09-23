import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MAX_PER_PAGE } from "../constants";
import CollectionsScreen from "../pages/Collections/Collections";
import DetailsScreen from "../pages/Details/Details";
import FollowingScreen from "../pages/Following/Following";
import HomeScreen from "../pages/Home/Home";
import TopicScreen from "../pages/Topics/Topics";
import { fetchCollections } from "../stores/middleware/collection";
import { fetchListPhotos, getRandomPhoto } from "../stores/middleware/photos";
import { fetchListTopics } from "../stores/middleware/topic";
import { ROUTES } from "./routes";

function AppRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchListTopics({
        ids: null,
        page: 1,
        per_page: MAX_PER_PAGE,
        order_by: "position",
      })
    );
    dispatch(
      fetchListPhotos({
        page: 1,
        per_page: MAX_PER_PAGE,
        order_by: "latest",
        refresh: true,
      })
    );
    dispatch(
      fetchCollections({
        page: 1,
        per_page: MAX_PER_PAGE,
      })
    );
    dispatch(getRandomPhoto());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomeScreen} />
        <Route path={ROUTES.FOLLOWING} component={FollowingScreen} />
        <Route path={ROUTES.TOPICS} component={TopicScreen} />
        <Route path={ROUTES.COLLECTIONS} component={CollectionsScreen} />
        <Route path={ROUTES.COLLECTIONS} component={DetailsScreen} />
        <Route
          path={`${ROUTES.COLLECTIONS}/:id/:title`}
          component={DetailsScreen}
        />
        <Route path={`${ROUTES.TOPICS}/:id`} component={DetailsScreen} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
