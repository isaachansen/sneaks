import React, { Component } from "react";
import Landing from "./components/Landing/Landing";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import { connect } from "react-redux";
import { setUser } from "./ducks/reducer";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import UpdateEmail from "./components/UpdateEmail/UpdateEmail";
// import UpdatePass from "./components/UpdatePass/UpdatePass";
import Wishlist from "./components/Wishlist/Wishlist";
import { Switch, Route, withRouter } from "react-router-dom";
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
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/update-email" component={UpdateEmail} />
          {/* <Route path="/update-password" component={UpdatePass} />  */}
          <Route path="/wishlist" component={Wishlist} />
        </Switch>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

const mapDispatchToProps = {
  setUser
};
const invokedConnect = connect(mapReduxStateToProps, mapDispatchToProps);

export default invokedConnect(withRouter(App));
