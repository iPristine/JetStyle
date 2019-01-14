import React, { Component } from "react";
import "./App.css";
import HeaderGroup from "./components/HeaderGroup";
import ContentHolder from "./components/ContentHolder";
import FooterGroup from "./components/FooterGroup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countCharacters: 0,
      characters: [],
      loaded: false
    };
    this.getCharacters = this.getCharacters.bind(this);
  }
  componentDidMount() {
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
        this.setState({
          characters: [...this.state.characters, ...data.results],
          loaded: true,
          countCharacters: this.state.countCharacters + count
        });
      });
  }

  render() {
    return (
      <div className="b-main">
        <Router>
          <>
            <HeaderGroup className="b-main__header" />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <ContentHolder
                    characters={this.state.characters}
                    handlerGetCharacters={this.getCharacters}
                    loaded={this.state.loaded}
                  />
                )}
              />
              <Route
                path="/character_id/:id"
                render={props => (
                  <CharacterDetail
                    id={props.match.params.id}
                    character={this.state.characters.find(
                      c => c.id === Number(props.match.params.id)
                    )}
                  />
                )}
              />
            </Switch>
          </>
        </Router>
        <FooterGroup />
      </div>
    );
  }
}

export default App;
