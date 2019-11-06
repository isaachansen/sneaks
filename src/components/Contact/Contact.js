import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import "./Contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header2 />
        <div className="div-form">
          <div>
            <div>CONTACT US</div>
          </div>
          <div>
            <form className="form">
              <input type="text" name="name" placeholder="Name" />
              <input type="text" name="email" placeholder="Email" />
              <textarea id="message" placeholder="Write something.."></textarea>
              <button>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
