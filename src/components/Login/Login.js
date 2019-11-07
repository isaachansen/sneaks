import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import logo from "./sneaks2.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import "./Login.scss";
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.login = this.login.bind(this);
  }

  async login(e) {
    if(this.state.email === "" || this.state.password === "") {
      e.preventDefault();
    } else {
      e.preventDefault();
      const { email, password } = this.state;
    const loggedInUser = await axios.post("/auth/login", {
      email,
      password
    })
    console.log(loggedInUser);
    this.props.setUser(loggedInUser.data)
    }

    // const { email, password } = this.state;
    // const loggedInUser = await axios.post("/auth/login", {
    //   email,
    //   password
    // })
    // console.log(loggedInUser);
    // this.props.setUser(loggedInUser.data)
  }




  render() {
    const { email, password } = this.state;
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
                      type="email"
                      className="form__field"
                      value={email}
                      placeholder="Email"
                      onChange={e => {
                        this.setState({
                          email: e.target.value
                        })
                      }}
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
                      value={password}
                      placeholder="Password"
                      onChange={e => {
                        this.setState({
                          password: e.target.value
                        })
                      }}
                    />
                  </form>
                </div>
              </div>

              <div className="login-btn">
                <button onClick={(e) => this.login(e)}>LOGIN</button>
              </div>

              <div className="register-text">
                <h3>
                  Don't have an account? <NavLink to="/register">REGISTER</NavLink>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

const mapDispatchToProps = {
  setUser
};

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Login);
