import React, { Component } from "react";
import "./CharacterDetail.css";

class CharacterDetail extends Component {
  render() {
    let character = this.props.character;
    return (
      <div className="b-main__character-detail">
        <div className="character-detail__img-wrapper">
          <img
            className="img-wrapper__img"
            src={character.image.medium_url}
            alt={character.name}
          />
        </div>
        <div className="character-detail__hero-info">
          <h2 className="hero-info__name">{character.name}</h2>
          <table className="hero-info__table">
            <tbody>
              <tr>
                <td className="table__type">Real name:</td>
                <td className="table__value">{character.real_name}</td>
              </tr>
              <tr>
                <td className="table__type">Publisher:</td>
                <td className="table__value">{character.publisher.name}</td>
              </tr>
              <tr>
                <td className="table__type">Gender:</td>
                <td className="table__value">
                  {character.gender ? "Male" : "Female"}
                </td>
              </tr>
              <tr>
                <td className="table__type">Updated:</td>
                <td className="table__value">
                  {(() => {
                    let date = new Date(
                      ...character.date_last_updated.split(" ")[0].split("-")
                    );
                    return date.toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    });
                  })()}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="hero-info__description">{character.deck}</p>
        </div>
      </div>
    );
  }
}

export default CharacterDetail;
