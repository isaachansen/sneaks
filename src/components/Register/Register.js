import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import logo from "./sneaks2.png";
import "./Register.scss";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
    this.register = this.register.bind(this);
  }

  async register(e) {
    if (
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.password === ""
    ) {
      e.preventDefault();
    } else {
      const { email, username, password } = this.state;
      const registeredUser = await axios.post("/auth/register", {
        email,
        username,
        password
      });
      this.props.history.push("/store");
      console.log(registeredUser);
      this.props.setUser(registeredUser.data);
    }
  }

  render() {
    const { email, username, password } = this.state;
    return (
      <div className="absolute-background">
        <Header2 />
        <div className="background-register">
          <div className="register-box">
            <div className="inner-register-box">
              <img className="register-logo" src={logo} alt="register-page" />

              <div className="container">
                <div className="container__item">
                  <form className="form">
                    <input
                      type="email"
                      className="form__field"
                      placeholder="Email"
                      value={email}
                      onChange={e => {
                        this.setState({
                          email: e.target.value
                        });
                      }}
                    />
                  </form>
                </div>
              </div>

              <div className="container username-box">
                <div className="container__item">
                  <form className="form">
                    <input
                      type="text"
                      className="form__field"
                      placeholder="Username"
                      value={username}
                      onChange={e => {
                        this.setState({
                          username: e.target.value
                        });
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
                      placeholder="Password"
                      value={password}
                      onChange={e => {
                        this.setState({
                          password: e.target.value
                        });
                      }}
                    />
                  </form>
                </div>
              </div>

              <div className="register-btn">
                <button onClick={e => this.register(e)}>REGISTER</button>
              </div>

              <div className="register-text">
                <h3>
                  Have an account? <NavLink to="/login">LOGIN</NavLink>
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
)(Register);
