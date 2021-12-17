import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Item from "./components/Item";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/my-item/:id" component={Item} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
