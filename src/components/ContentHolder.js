import React, { Component } from "react";
import "./ContentHolder.css";
import CharacterIcon from "./CharacterIcon.js";

class ContentHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countCharacters: 0,
      characters: [],
      loaded: false
    };
    this.getCharacters(6);
  }

  getCharacters(count) {
    this.setState({ loaded: false });
    return fetch(
      `/api/characters/?api_key=${
        process.env.REACT_APP_SECRET_KEY
      }&format=json&publish_month=1&publish_year=2012&limit=${count}&offset=${
        this.state.countCharacters
      }`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.results);
        this.setState({
          characters: [...this.state.characters, ...data.results],
          loaded: true,
          countCharacters: this.state.countCharacters + count
        });
      });
  }

  render() {
    return (
      <div className={this.props.className}>
        {console.log(this.state.characters)}
        {this.state.characters.map((character, index) => (
          <CharacterIcon
            onClick={() => this.props.handl(character)}
            className="content__character-icon"
            key={index}
            character={character}
          />
        ))}
        <ShowMore
          onClick={() => this.getCharacters(3)}
          loaded={this.state.loaded}
          className="content__button"
        />
      </div>
    );
  }
}

class ShowMore extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className={this.props.className}>
        {this.props.loaded ? "SHOW MORE" : "Loading..."}
      </div>
    );
  }
}

export default ContentHolder;
