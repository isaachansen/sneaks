import React, { Component } from "react";
import video from "./shoes.mp4";
import Header from "../Header/Header";
// import image from "./scroll.png";
import "./Landing.scss";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <header>
          <Header></Header>
          <div className="video-container">
            <video autoPlay muted loop className="myVideo">
              <source src={video} type="video/mp4" />
            </video>
            {/* <img className="scroll"  alt="scroll" src={image} /> */}
          </div>
        </header>
        <div className="container-2">
          <div className="brands-container">
            <div className="box-top">NIKE</div>
            <div className="box-top">ADIDAS</div>
            <div className="box-top">VANS</div>
            <div className="box-bottom">CONVERSE</div>
            <div className="box-bottom">AIR JORDAN</div>
            <div className="box-bottom">OTHER</div>
          </div>
        </div>
      </div>
    );
  }
}
