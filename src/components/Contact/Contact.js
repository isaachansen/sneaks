import React, { Component } from "react";
import Header2 from "../Header2/Header2";
import "./Contact.scss";
import axios from "axios";

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  async handleSubmit(e) {
    const {name, email, message} = this.state;
    if(name === "" || email === "" || message === "") {
      alert("CAN'T LEAVE FORM BLANK")
    } else {
      await axios.post("/auth/contact",  {
        name,
        email,
        message
      })
    }
  }

  render() {
    const {name, email, message} = this.state;
    return (
      <div>
        <Header2 />
        <div className="div-form">
          <div>
            <div className="contact-title">CONTACT US</div>
            <form className="contact-form">
              <div className="contact-input">
                <input className="person-input" type="text" name="name" placeholder="Name" onChange={this.handleChange}/>
              </div>
              <div className="contact-input">
                <input className="person-input" type="email" name="email" placeholder="Email" onChange={this.handleChange} />
              </div>
              <div className="message-box"> 
                <textarea
                  className="message-input"
                  id="message"
                  name="message"
                  placeholder="Message"
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div>
                <button className="submit-button" onClick={(e) => {
                  e.preventDefault()
                  this.handleSubmit(name, email, message)
                  this.props.history.push('/')
                }}>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
