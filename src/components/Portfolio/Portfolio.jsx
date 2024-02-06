import React, { Component } from "react";
import Title from "../Title/Title";
import Work from "../Work/Work";
import "./Portfolio.css";

export default class Portfolio extends Component {
  title = "PORTFOLIO COMPONENT";
  srcImg1 = "imgs/port1.png";
  srcImg2 = "imgs/port2.png";
  srcImg3 = "imgs/port3.png";
  alt = "portfolio";

  componentDidMount() {
    document.title = "Portfolio";
  }

  state = {
    popUp: {
      display: "none",
    },
    srcImgPopUp: "",
  };

  getSrcImg = (srcImgPopUp) => {
    this.setState({
      popUp: {
        display: "flex",
      },
      srcImgPopUp: srcImgPopUp,
    });
  };

  hidePopUp = () => {
    this.setState({
      popUp: {
        display: "none",
      },
    });
  };

  stopPropagation = function (e) {
    e.stopPropagation();
  };

  render() {
    return (
      <section id="portfolio" className="pb-4">
        <div className="container change-color-title">
          <Title title={this.title} />
          <div className="row gy-4">
            <div className="col-lg-4">
              <Work
                getSrcImg={this.getSrcImg}
                srcImg={this.srcImg1}
                alt={this.alt}
                popUp={this.state.popUp}
              />
            </div>
            <div className="col-lg-4">
              <Work
                getSrcImg={this.getSrcImg}
                srcImg={this.srcImg2}
                alt={this.alt}
                popUp={this.state.popUp}
              />
            </div>
            <div className="col-lg-4">
              <Work
                getSrcImg={this.getSrcImg}
                srcImg={this.srcImg3}
                alt={this.alt}
                popUp={this.state.popUp}
              />
            </div>
            <div className="col-lg-4">
              <Work
                getSrcImg={this.getSrcImg}
                srcImg={this.srcImg2}
                alt={this.alt}
                popUp={this.state.popUp}
              />
            </div>
            <div className="col-lg-4">
              <Work
                getSrcImg={this.getSrcImg}
                srcImg={this.srcImg3}
                alt={this.alt}
                popUp={this.state.popUp}
              />
            </div>
            <div className="col-lg-4">
              <Work
                getSrcImg={this.getSrcImg}
                srcImg={this.srcImg1}
                alt={this.alt}
                popUp={this.state.popUp}
              />
            </div>
          </div>
          <div
            className="pop-up"
            style={this.state.popUp}
            onClick={this.hidePopUp}
          >
            <img
              src={this.state.srcImgPopUp}
              alt={this.alt}
              onClick={this.stopPropagation}
            />
          </div>
        </div>
      </section>
    );
  }
}
