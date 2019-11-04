import React, { Component } from "react";
import video from "./shoes.mp4";
import Header from "../Header/Header";
import "./Landing.scss";

export default class Landing extends Component {
  render() {
    return (
        <div>
          <header>
            <Header />
            <div className="video-container">
              <video autoPlay muted loop className="myVideo">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </header>
        </div>
    );
  }
}