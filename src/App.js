import React, { Component } from "react";
import "./App.css";
import HeaderGroup from "./components/HeaderGroup";
import ContentHolder from "./components/ContentHolder";
import FooterGroup from "./components/FooterGroup";

class App extends Component {
  render() {
    return (
      <div className="b-main">
        <HeaderGroup className="b-main__header" />
        <ContentHolder className="b-main__content" />
        <FooterGroup className="b-main__footer" />
      </div>
    );
  }
}

export default App;
