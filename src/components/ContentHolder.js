import React, { Component } from "react";
import "./ContentHolder.css";
import CharacterIcon from "./CharacterIcon.js";
import { Link } from "react-router-dom";

class ContentHolder extends Component {
  render() {
    return (
      <div className="b-main__content">
        {this.props.characters.map((character, index) => (
          <Link
            className="content__character-icon-link"
            key={index}
            to={`/character_id/${character.id}`}
          >
            <CharacterIcon character={character} />
          </Link>
        ))}
        <ShowMore
          handlerClick={this.props.handlerGetCharacters}
          loaded={this.props.loaded}
          className="content__button"
        />
      </div>
    );
  }
}

class ShowMore extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.handlerClick(6)}
        className={this.props.className}
      >
        {this.props.loaded ? "SHOW MORE" : "Loading..."}
      </div>
    );
  }
}

export default ContentHolder;
