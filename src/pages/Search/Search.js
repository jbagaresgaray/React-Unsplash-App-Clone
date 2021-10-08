import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router";

import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";

import "./Search.scss";
import { Container } from "react-bootstrap";
import { ROUTES } from "../../router/routes";
import SearchUsers from "./components/Users";
import SearchPhotos from "./components/Photos";
import SearchCollections from "./components/Collections";
import { useDispatch } from "react-redux";
import { searchActions } from "../../stores/slices/searchSlice";

function SearchScreen() {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  useEffect(() => {
    return () => {
      console.log("unmounting...");
      dispatch(searchActions.setSearchText(""));
    };
  }, [dispatch]);

  return (
    <div className="SearchScreen">
      <AppHeader />
      <main>
        <Container>
          <div className="py-5 text-left">
            <h2>Following Page</h2>
            <p className="lead">
              The latest photos from photographers you follow.
            </p>
          </div>
          <Switch>
            <Route
              path={`${path}${ROUTES.PHOTO}/:search`}
              component={SearchPhotos}
            />
            <Route
              path={`${path}${ROUTES.COLLECTIONS}/:search`}
              component={SearchCollections}
            />
            <Route
              path={`${path}${ROUTES.USER}/:search`}
              component={SearchUsers}
            />
          </Switch>
        </Container>
      </main>
      <AppFooter />
    </div>
  );
}

export default SearchScreen;
