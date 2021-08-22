import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:name" component={Portfolio} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
