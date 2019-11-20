import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import "./UpdateEmail.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    this.props.history.push("/profile")
  }

  render() {
    toast.configure();
    const notify = () =>
      toast.success("Email Updated! Use it next time you log in!", {
        autoClose: 2000
      });
    
    return (
      <div>
        <Header2 />
        <form>
          <div className="update-form">
            <input
              type="email"
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
              notify();
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
