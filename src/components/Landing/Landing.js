import React, { Component } from "react";
import video from "./shoes.mp4";
import Header from "../Header/Header";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Landing.scss";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <header>
          <Header></Header>
          <div className="video-container">

                <div className="label">
                  <h1>BE YOUR OWN LABEL</h1>
                </div>
                <span>
                  <Link duration={700} smooth={true} to="2">
                    <FaAngleDown className="angle"/>
                  </Link>
                </span>
    
              {/* <button className="shop-now">SHOP NOW</button> */}



            <video autoPlay muted loop className="myVideo">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </header>

        <div id="2" className="container-2">
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
