import React from "react";
import "./Header.scss";
import logo from "./sneaks.png";
import { NavLink } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
 
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggler = this.toggler.bind(this);
  }

  toggler() {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  }

  render() {
    return (
      <div className="header">
        <div className="head">
          <NavLink to="/">
            <img className="logo" src={logo} alt="logo"></img>
          </NavLink>
          <button onClick={this.toggler}  className="menu">
          <FaBars className="menu-icon" />
          </button>
          <nav className={this.state.toggle ? "show" : ""}>
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
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
