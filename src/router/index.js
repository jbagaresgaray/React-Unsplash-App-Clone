import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MAX_PER_PAGE } from "../constants";
import HomeScreen from "../pages/Home/Home";
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
        <Route path={ROUTES.HOME}>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
