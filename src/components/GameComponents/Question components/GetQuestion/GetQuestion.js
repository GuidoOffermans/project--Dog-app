import React, { Component } from "react";
import {connect} from 'react-redux'

import BreedQuestion from "../../Question components/BreedQuestion/BreedQuestion";
import PictureQuestion from "../../Question components/PictureQuestion/PictureQuestion";

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
