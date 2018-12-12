import React, { Component } from "react";
import "./CharacterIcon.css";

class CharacterIcon extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img
          className="character-icon__avatar"
          src={this.props.character.image.medium_url}
          alt="characterImg"
        />
        <div className="character-icon__character-info">
          <span className="character-info__name">
            {this.props.character.name}
          </span>
          <span className="character-info__issues">
            {this.props.character.count_of_issue_appearances} issues
          </span>
        </div>
      </div>
    );
  }
}

export default CharacterIcon;
