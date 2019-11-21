import React from "react";
import "./Header.scss";
import logo from "./sneaks.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUser, logOutUser } from "../../ducks/reducer";
import { FaBars } from "react-icons/fa";
import axios from "axios";

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
    this.logout = this.logout.bind(this);
    this.toggler = this.toggler.bind(this);
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
      <header className="header">
        <div className="head">
          <NavLink to="/">
            <img className="logo" src={logo} alt="logo"></img>
          </NavLink>
          <button onClick={this.toggler}  className="menu">
            <FaBars className="menu-icon" />
          </button>

          {!this.props.user ? (
            <nav className={this.state.toggle ? "show" : ""}>
              <NavLink className="navlink" to="/store">STORE</NavLink>
              <NavLink className="navlink" to="/contact">CONTACT</NavLink>
              <NavLink className="navlink" to="/login">LOGIN</NavLink>
            </nav>
          ) : (
            <nav className={this.state.toggle ? "show" : ""}>
              <NavLink className="navlink" to="/store">STORE</NavLink>
              <NavLink className="navlink" to="/cart">CART</NavLink>
              <NavLink className="navlink" to="/contact">CONTACT</NavLink>
              <NavLink className="user-profile navlink" to="/profile">
              {this.props.user.username}
              </NavLink>
              <NavLink onClick={() => this.logout()} to="/store">
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

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Header);
