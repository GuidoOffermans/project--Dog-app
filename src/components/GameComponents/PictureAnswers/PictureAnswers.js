import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import DogPicture from "../../Layout/DogPicture/DogPicture";

class PictureAnswers extends Component {
  render() {
    return (
      <div classname="answers">
        <DogPicture />
      </div>
    );
  }
}

export default PictureAnswers;
