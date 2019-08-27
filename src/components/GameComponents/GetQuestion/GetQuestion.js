import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import DogPicture from "../../Layout/DogPicture/DogPicture";

class GetQuestion extends Component {
  state = {
    breedsInGame: [
      "chow",
      "collie",
      "african",
      "deerhound",
      "dingo",
      "greyhound"
    ],
    currentBreed: ""
  };

  componentDidMount() {
    const breedsInGame = this.state.breedsInGame;
    const currentBreed =
      breedsInGame[Math.floor(Math.random() * breedsInGame.length)];
    this.setState({ currentBreed: currentBreed });
  }

  render() {

    return (
      <div className="question">
        {this.state.currentBreed !== "" ? (
          <DogPicture breed={this.state.currentBreed} />
        ) : (
          false
        )}
      </div>
    );
  }
}

export default GetQuestion;
