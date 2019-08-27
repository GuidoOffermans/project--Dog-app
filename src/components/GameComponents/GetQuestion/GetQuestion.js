import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import DogPicture from "../../Layout/DogPicture/DogPicture";
import BreedQuestion from "../../GameComponents/BreedQuestion/BreedQuestion";
import PictureQuestion from "../../GameComponents/PictureQuestion/PictureQuestion";

class GetQuestion extends Component {

  render() {
    return this.props.currentBreed !== "" ? (
      this.props.currentGameType === "breed" ? (
        <BreedQuestion/>
      ) : (
        <PictureQuestion />
      )
    ) : (
      false
    );
  }
}

export default GetQuestion