import React, { Component } from "react";
import Landing from "./components/Landing/Landing";
import Store from "./components/Store/Store";
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/store" component={Store} />
        </Switch>
      </div>
    );
  }
}

export default App;
