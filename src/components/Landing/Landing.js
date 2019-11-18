import React, { Component } from "react";
import video from "./shoes.mp4";
import Header from "../Header/Header";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./Landing.scss";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <header className="landing-header">
          <Header></Header>
          <div className="video-container">
            <div className="label">
              <h1 className="motto">BE YOUR OWN LABEL</h1>
            </div>
            <span>
              <Link duration={700} smooth={true} to="2">
                <FaAngleDown className="angle" />
              </Link>
            </span>

            {/* <button className="shop-now">SHOP NOW</button> */}

            <video autoPlay muted loop className="myVideo">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </header>

        <div id="2" className="container-2">
          <NavLink to="/store">
            <div className="top-container">
              <div className="top-img"></div>
            </div>
          </NavLink>
          <div className="bottom-container">
            <NavLink to="/store">
              <div className="left-img imgs"></div>
            </NavLink>
            <NavLink to="/store">
              <div className="right-img imgs"></div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
