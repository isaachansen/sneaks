import React from "react";
import "./Header.scss";
import logo from "./sneaks.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUser, logOutUser } from "../../ducks/reducer";
import { FaBars } from "react-icons/fa";
import axios from "axios";

class Header extends React.Component {
  logout() {
    axios.delete("/auth/logout").then(res => {
      this.props.logOutUser();
    });
  }

  render() {
    return (
      <div className="header">
        <div className="head">
          <NavLink to="/">
            <img className="logo" src={logo} alt="logo"></img>
          </NavLink>
          <button className="menu">
            <FaBars className="menu-icon" />
          </button>

          {!this.props.user ? (
            <nav>
              <NavLink to="/store">STORE</NavLink>
              <NavLink to="/contact">CONTACT</NavLink>
              <NavLink to="/login">LOGIN</NavLink>
            </nav>
          ) : (
            <nav>
              <NavLink to="/store">STORE</NavLink>
              <NavLink to="/cart">CART</NavLink>
              <NavLink to="/contact">CONTACT</NavLink>
              <NavLink to="/profile">
                PROFILE
                {/* <FaUserAlt  className="profile"/> */}
              </NavLink>
              <NavLink onClick={() => this.logout()} to="/store">
                LOGOUT
              </NavLink>
            </nav>
          )}
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
)(Header);
