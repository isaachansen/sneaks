import React, { Component } from "react";
import Landing from "./components/Landing/Landing";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/store" component={Store} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
