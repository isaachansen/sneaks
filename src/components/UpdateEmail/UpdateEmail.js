import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import "./UpdateEmail.scss";

class UpdateEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      email: e.target.value
    });
  }

  async submitHandler() {
    const { email } = this.state;
    await axios.put("/auth/update_email", { email });
    console.log("hello");
  }

  render() {
    return (
      <div>
        <Header2 />
        <form>
          <div className="update-form">
            <input
              className="update-input"
              onChange={this.changeHandler}
              placeholder="New Email"
            ></input>
          </div>
          <button
            className="update-button"
            onClick={e => {
              e.preventDefault();
              this.submitHandler(this.state.email);
            }}
          >
            UPDATE EMAIL
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { setUser })(UpdateEmail);
