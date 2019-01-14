import React, { Component } from "react";
import "./CharacterDetail.css";

class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: this.props.character
    };
  }
  getCharacter(id) {
    return fetch(
      `/api/characters/?api_key=${
        process.env.REACT_APP_SECRET_KEY
      }&format=json&filter=id:${id}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ character: data.results[0] });
      });
  }

  render() {
    if (!this.state.character) {
      this.getCharacter(this.props.id);
    }
    // let character = this.props.character;
    return !this.state.character ? (
      <p>Loading...</p>
    ) : (
      <div className="b-main__character-detail">
        <div className="character-detail__img-wrapper">
          <img
            className="img-wrapper__img"
            src={this.state.character.image.medium_url}
            alt={this.state.character.name}
          />
        </div>
        <div className="character-detail__hero-info">
          <h2 className="hero-info__name">{this.state.character.name}</h2>
          <table className="hero-info__table">
            <tbody>
              <tr>
                <td className="table__type">Real name:</td>
                <td className="table__value">
                  {this.state.character.real_name}
                </td>
              </tr>
              <tr>
                <td className="table__type">Publisher:</td>
                <td className="table__value">
                  {this.state.character.publisher.name}
                </td>
              </tr>
              <tr>
                <td className="table__type">Gender:</td>
                <td className="table__value">
                  {this.state.character.gender ? "Male" : "Female"}
                </td>
              </tr>
              <tr>
                <td className="table__type">Updated:</td>
                <td className="table__value">
                  {(() => {
                    let date = new Date(
                      ...this.state.character.date_last_updated
                        .split(" ")[0]
                        .split("-")
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
          <p className="hero-info__description">{this.state.character.deck}</p>
        </div>
      </div>
    );
  }
}

export default CharacterDetail;
