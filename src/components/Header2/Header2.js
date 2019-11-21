import React from "react";
import "./Header2.scss";
import logo from "./sneaks.png";
import { connect } from "react-redux";
import { setUser, logOutUser } from "../../ducks/reducer";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import axios from "axios";


class Header2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggler = this.toggler.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggler() {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  }

  logout() {
    axios.delete("/auth/logout").then(res => {
      this.props.logOutUser();
    });
  }

  render() {
    return (
      <header className="header2">
        <div className="head2">
          <NavLink to="/">
            <img className="logo2" src={logo} alt="logo"></img>
          </NavLink>
          <button onClick={this.toggler} className="menu2">
            <FaBars className="menu-icon2" />
          </button>

          {!this.props.user ? (
            <nav className={this.state.toggle ? "show2" : ""}>
              <NavLink activeClassName="active" to="/store">
                STORE
              </NavLink>
              <NavLink activeClassName="active" to="/contact">
                CONTACT
              </NavLink>
              <NavLink activeClassName="active" to="/login">
                LOGIN
              </NavLink>
            </nav>
          ) : (
            <nav className={this.state.toggle ? "show2" : ""}>
              <NavLink activeClassName="active" to="/store">
                STORE
              </NavLink>
              <NavLink activeClassName="active" to="/cart">
                CART
              </NavLink>
              <NavLink activeClassName="active" to="/contact">
                CONTACT
              </NavLink>
              <NavLink className="user-profile" to="/profile">
                {this.props.user.username}
              </NavLink>
              <NavLink
                onClick={() => this.logout()}
                activeClassName="none"
                to="/store"
              >
                LOGOUT
              </NavLink>
            </nav>
          )}
        </div>
      </header>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

const mapDispatchToProps = {
  setUser,
  logOutUser
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(Header2);
