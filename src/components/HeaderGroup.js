import React, { Component } from "react";
import "./HeaderGroup.css";
import logo from "./img/Logo.svg";
import { Link } from "react-router-dom";

class HeaderGroup extends Component {
  render() {
    return (
      <div className={`${this.props.className}`}>
        <Logo className="header__logo" />
      </div>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <Link to="/" className={`${this.props.className}`}>
        <img className="logo__img" src={logo} alt="site logo" />
      </Link>
    );
  }
}

export default HeaderGroup;
