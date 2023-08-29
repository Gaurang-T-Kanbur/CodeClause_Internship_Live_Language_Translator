import React from "react";
import { Switch, Route } from "react-router-dom";
import IntroAnimation from "./IntroAnimation";
import Translate from "./components/Translate";

const Routes = () => {
  return (
    <Switch>
      <Route path="/intro" component={IntroAnimation} />
      <Route path="/translate" component={Translate} />
    </Switch>
  );
};

export default Routes;
