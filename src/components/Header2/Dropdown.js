import React from "react";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import axios from "axios";


class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.logout = this.logout.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  logout() {
    axios.delete("/auth/logout").then(res => {
      this.props.logOutUser();
    });
  }


  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        <NavLink onClick={this.showMenu} className="user-profile">
          {this.props.user.username}
          <FaAngleDown className="arrow-down" />
        </NavLink>

        {this.state.showMenu ? (
          <div>
            <NavLink activeClassName="none" to="/profile">ACCOUNT</NavLink>
            <NavLink
              onClick={() => this.logout()}
              activeClassName="none"
              to="/store"
            >LOGOUT</NavLink>
          </div>
        ) : null}
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

export default connect(mapReduxStateToProps, mapDispatchToProps)(Dropdown);
