import React, { Component } from "react";
import "./CharacterDetail.css";

class CharacterDetail extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="character-detail__img-wrapper">
          <img
            className="img-wrapper__img"
            src={this.props.character.image.medium_url}
            alt={this.props.character.name}
          />
        </div>
        <div className="character-detail__hero-info">
          <h2 className="hero-info__name">{this.props.character.name}</h2>
          <table className="hero-info__table">
            <tbody>
              <tr>
                <td className="table__type">Real name:</td>
                <td className="table__value">
                  {this.props.character.real_name}
                </td>
              </tr>
              <tr>
                <td className="table__type">Publisher:</td>
                <td className="table__value">
                  {this.props.character.publisher.name}
                </td>
              </tr>
              <tr>
                <td className="table__type">Gender:</td>
                <td className="table__value">
                  {this.props.character.gender ? "Male" : "Female"}
                </td>
              </tr>
              <tr>
                <td className="table__type">Updated:</td>
                <td className="table__value">
                  {this.props.character.date_last_updated}
                </td>
              </tr>
            </tbody>
          </table>
          <span className="hero-info__description">
            {this.props.character.deck}
          </span>
        </div>
        <p
          className="character-detail__close-btn"
          onClick={() => this.props.handlerClose()}
        >
          {"X"}
        </p>
      </div>
    );
  }
}

export default CharacterDetail;
