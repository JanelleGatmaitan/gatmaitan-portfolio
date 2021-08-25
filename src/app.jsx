import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";
import './styles/app.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/portfolio/:name" component={Portfolio} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
