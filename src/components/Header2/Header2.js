import React from "react";
import "./Header2.scss";
import logo from "./sneaks.png";
import { connect } from "react-redux";
import { setUser, logOutUser } from "../../ducks/reducer";
import { NavLink } from "react-router-dom";

import axios from "axios";

class Header2 extends React.Component {
  
  logout() {
    axios.delete("/auth/logout").then(res => {
        this.props.logOutUser()
    })
  }

  render() {
    return (
      <div className="header2">
        <div className="head2">
          <NavLink to="/">
            <img className="logo2" src={logo} alt="logo"></img>
          </NavLink>

        {!this.props.user ? (
          <nav>
            <NavLink activeClassName="active" to="/store">
              STORE
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              CONTACT
            </NavLink>
            <NavLink activeClassName="active" to="/login">
              LOGIN
            </NavLink>
          </nav> 

        ):(
          <nav>
            <NavLink activeClassName="active" to="/store">
              STORE
            </NavLink>
            <NavLink activeClassName="active" to="/cart">
              CART
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              CONTACT
            </NavLink>
            <NavLink onClick={() => this.logout()} activeClassName="active" to="/store">
              LOGOUT
            </NavLink>
          </nav>
        )}
          {/* <nav>
            <NavLink activeClassName="active" to="/store">
              STORE
            </NavLink>
            <NavLink activeClassName="active" to="/cart">
              CART
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              CONTACT
            </NavLink>
            <NavLink activeClassName="active" to="/login">
              LOGIN
            </NavLink>
          </nav> */}

        </div>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

const mapDispatchToProps = {
  setUser, 
  logOutUser
};

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Header2);
