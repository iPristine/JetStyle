import React, { Component } from "react";
import "./App.css";
import HeaderGroup from "./components/HeaderGroup";
import ContentHolder from "./components/ContentHolder";
import FooterGroup from "./components/FooterGroup";
import CharacterDetail from "./components/CharacterDetail.js";

class App extends Component {
  state = {
    showAll: true,
    showedCharacter: {}
  };

  handleCharacterClick = character => {
    console.log("HandlerClick Vlasdasd", character);
    this.setState({ showAll: false, showedCharacter: character });
  };

  handleCharacterClose = () => {
    this.setState({ showAll: true });
  };

  render() {
    return (
      <div className="b-main">
        <HeaderGroup className="b-main__header" />
        {this.state.showAll ? (
          <ContentHolder
            className="b-main__content"
            handl={this.handleCharacterClick}
          />
        ) : (
          <CharacterDetail
            className="b-main__character-detail"
            handlerClose={this.handleCharacterClose}
            character={this.state.showedCharacter}
          />
        )}
        <FooterGroup className="b-main__footer" />
      </div>
    );
  }
}

export default App;
