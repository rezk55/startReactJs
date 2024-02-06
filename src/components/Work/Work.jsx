import React, { Component } from "react";
import "./Work.css";

export default class Work extends Component {
  render() {
    return (
      <div
        className="work"
        onClick={() => this.props.getSrcImg(this.props.srcImg)}
      >
        <img src={this.props.srcImg} className="w-100" alt={this.props.alt} />
        <div className="overlay">
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    );
  }
}
