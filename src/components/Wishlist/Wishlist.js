import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import { TiArrowLeft } from "react-icons/ti";
import { NavLink } from "react-router-dom";

export default class Wishlist extends Component {
  render() {
    return (
      <div>
        <Header2 />
        <div className="background-wishlist">
          <div>
            <NavLink to="/profile">
              <TiArrowLeft className="back-arrow" />
            </NavLink>
          </div>
          <div>wishlist</div>
        </div>
      </div>
    );
  }
}
