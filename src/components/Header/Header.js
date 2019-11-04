import React from "react";
import "./Header.scss";
import logo from './sneaks.png';

const Header = () => {
  return (
    <div className="head">
          <a href="#/">
          <img className="logo" src={logo} alt="logo"></img>
          </a>
            {/* <button className="menu"> */}
                {/* <FaBars className="menu-icon" /> */}
            {/* </button> */}
          <nav>
            <ul>
              <li>
                <a href="#/store">STORE</a>
              </li>
              <li>
                <a href="#/cart">CART</a>
              </li>
              <li>
                <a href="#/contact">CONTACT</a>
              </li>
              <li>
                <a href="#/login">LOGIN</a>
              </li>
            </ul>
          </nav>
        </div>
  );
};

export default Header;
