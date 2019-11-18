import React from "react";
import Header2 from "../Header2/Header2";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import { NavLink } from "react-router-dom";
import "./Profile.scss";


class Profile extends React.Component {
  render() {
    return (
      <div>
        <Header2 />
        <div className="background-profile">
          <div>
            <div className="profile-picture"></div>
          </div>
          <div className="username-text">
            {this.props.user.username}
          </div>
          <NavLink to="/wishlist">
            <button className="profile-btn wishlist-btn">WISHLIST</button>
          </NavLink>
          <NavLink to="/update-email">
            <button className="profile-btn update-email-btn">UPDATE EMAIL</button>
          </NavLink>
          <NavLink to="/update-password">
            <button className="profile-btn update-password-btn">UPDATE PASSWORD</button>
          </NavLink>
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

export default connect(mapReduxStateToProps, mapDispatchToProps)(Profile);
