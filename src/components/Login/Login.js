import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import logo from "./sneaks2.png";
import { NavLink } from "react-router-dom";
import "./Login.scss";

export default class Login extends Component {
  render() {
    return (
      <div className="absolute-background">
        <Header2 />
        <div className="background-login">
          <div className="login-box">
            <div className="inner-login-box">
              <img className="login-logo" src={logo} alt="login-page" />

              <div className="container username-box">
                <div className="container__item">
                  <form className="form">
                    <input
                      type="text"
                      className="form__field"
                      placeholder="Username"
                    />
                  </form>
                </div>
              </div>

              <div className="container">
                <div className="container__item">
                  <form className="form">
                    <input
                      type="password"
                      className="form__field"
                      placeholder="Password"
                    />
                  </form>
                </div>
              </div>

              <div className="login-btn">
                <button>LOGIN</button>
              </div>

              <div className="register-text">
                <h3>
                  Don't have an account? <NavLink to="/register">Register!</NavLink>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
