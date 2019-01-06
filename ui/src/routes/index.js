import React from "react";
import { Switch, Route } from "react-router-dom";
import ComingSoon from "./ComingSoon";
import Home from "./Home";

export default () => (
  <Switch>
    <Route exact path="/" component={ComingSoon} />
    <Route exact path="/home" component={Home} />
  </Switch>
);
