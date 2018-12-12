import React, { Component } from "react";
import "./FooterGroup.css";

class FooterGroup extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <p className="footer__text">© 2018 JetStyle</p>
      </div>
    );
  }
}

export default FooterGroup;
