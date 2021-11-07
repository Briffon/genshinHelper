import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Landing from "../Pages/Landing";
import Teams from "../Pages/Teams";
import Dailies from "../Pages/Dailies";
import Build from "../Pages/Build";
import BuildCharacters from "../Pages/BuildCharacters";

const Routes = () => {
  const location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Teams" component={Teams} />
      <Route exact path="/Dailies" component={Dailies} />
      <Route exact path="/Build" component={Build} />
      <Route exact path="/BuildCharacters" component={BuildCharacters} />
    </Switch>
  );
};
export default Routes;
