import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "components/Dashboard";

import Create from "./components/Tasks/Create";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/tasks/create" render={() => <Create />} />
      <Route exact path="/dashboard" render={() => <Dashboard />} />
    </Switch>
  </Router>
);

export default App;
