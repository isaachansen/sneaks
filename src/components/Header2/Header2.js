import React from "react";
import "./Header2.scss";
import logo from "./sneaks.png";
import { NavLink } from "react-router-dom";

class Header2 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     toggle: false
  //   };
  //   this.toggler = this.toggler.bind(this);
  // }

  // toggler() {
  //   this.setState(prevState => {
  //     return {
  //       toggle: !prevState.toggle
  //     };
  //   });
  // }

  render() {
    return (
      <div className="header2">
        <div className="head2">
          <NavLink to="/">
            <img className="logo2" src={logo} alt="logo"></img>
          </NavLink>
          {/* <button className="menu"> */}
          {/* <FaBars className="menu-icon" /> */}
          {/* </button> */}
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
            <NavLink activeClassName="active" to="/login">
              LOGIN
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header2;
