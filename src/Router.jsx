import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Pizza/Home";
import Pizzas from "./components/Pizza/Pizzas";
import ErrorPage from "./components/Struct/ErrorPage";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pizzas" component={Pizzas} />
      <Route
        render={() => (
          <ErrorPage title="404 Not Found" message="La page n'existe pas" />
        )}
      />
    </Switch>
  );
}
