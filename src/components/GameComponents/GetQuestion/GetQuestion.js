import React, { Component } from "react";

// import DogPicture from "../../Layout/DogPicture/DogPicture";
import BreedQuestion from "../../GameComponents/BreedQuestion/BreedQuestion";
import PictureQuestion from "../../GameComponents/PictureQuestion/PictureQuestion";

class GetQuestion extends Component {

  render() {
    // console.log('props getquestion:',this.props)
    return this.props.currentBreed !== "" ? (
      this.props.currentGameType === "breed" ? (
        <BreedQuestion currentGameDogs={this.props.currentGameDogs}/>
      ) : (
        <PictureQuestion />
      )
    ) : (
      false
    );
  }
}

export default GetQuestion