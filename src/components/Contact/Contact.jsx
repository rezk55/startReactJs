import React, { Component } from "react";
import "./Contact.css";
import Title from "../Title/Title";

export default class Contact extends Component {
  componentDidMount() {
    document.title = "Contact";
  }
  addLabel = (e) => {
    const value = e.target.value;
    const prevElementSibling = e.target.previousElementSibling;
    if (value.length > 0) {
      prevElementSibling.style.cssText = "opacity:1; top: -40px";
    } else {
      prevElementSibling.style.cssText = "opacity:0; top:0";
    }
  };
  render() {
    return (
      <section id="contact">
        <div className="container change-color-title">
          <Title title="CONATCT SECTION" />
          <form className="w-75 mx-auto ">
            <div className="input position-relative my-5">
              <label htmlFor="">userName:</label>
              <input
                type="text"
                className="form-control py-2"
                id="userName"
                placeholder="userName"
                onKeyUp={this.addLabel}
              />
            </div>
            <div className="input position-relative my-5">
              <label htmlFor="">userAge:</label>
              <input
                type="number"
                className="form-control py-2"
                id="userAge"
                placeholder="userAge"
                onKeyUp={this.addLabel}
              />
            </div>
            <div className="input position-relative my-3">
              <label htmlFor="">userEmail:</label>
              <input
                type="email"
                className="form-control py-2"
                id="email"
                placeholder="userEmail"
                onKeyUp={this.addLabel}
              />
            </div>
            <div className="input position-relative my-5">
              <label>Password:</label>
              <input
                type="password"
                className="form-control py-2"
                id="floatingPassword"
                placeholder="userPassword"
                onKeyUp={this.addLabel}
              />
            </div>
            <button className="btn-send-message">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
}
