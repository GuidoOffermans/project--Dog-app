import React, { Component } from "react";

import BreedQuestion from "../../GameComponents/BreedQuestion/BreedQuestion";
import PictureQuestion from "../../GameComponents/PictureQuestion/PictureQuestion";

class GetQuestion extends Component {
  render() {
    return this.props.currentBreed !== "" ? (
      this.props.currentGameType === "breed" ? (
        <BreedQuestion dogsCurrentlyInGame={this.props.dogsCurrentlyInGame} />
      ) : (
        <PictureQuestion dogsCurrentlyInGame={this.props.dogsCurrentlyInGame} />
      )
    ) : (
      false
    );
  }
}

export default GetQuestion;
