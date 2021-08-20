import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "../pages/Home/Home";
import { ROUTES } from "./routes";

function AppRoutes() {
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
