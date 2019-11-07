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
            <div className="contact-title">CONTACT US</div>
            <form className="contact-form">
              <div className="contact-input">
                <input className="person-input" type="text" name="name" placeholder="Name" />
              </div>
              <div className="contact-input">
                <input className="person-input" type="text" name="email" placeholder="Email" />
              </div>
              <div className="message-box"> 
                <textarea
                  className="message-input"
                  id="message"
                  placeholder="Write something.."
                ></textarea>
              </div>
              <div>
                <button>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
