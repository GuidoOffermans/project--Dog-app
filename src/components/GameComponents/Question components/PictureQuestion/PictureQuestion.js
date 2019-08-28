import React, { Component } from "react";
import { connect } from "react-redux";
import DogPicture from "../../DogPicture/DogPicture";

let hasData = false;

class PictureQuestion extends Component {
  state = {
    currentBreed: ""
  };

  componentDidUpdate = () => {
    if (
      hasData === false &&
      this.props.dogsCurrentlyInGame.length > 0 &&
      this.props.dogList.length > 0
    ) {
      this.setState({ currentBreed: this.props.dogsCurrentlyInGame[0][0] });
      hasData = true;
    }
  };

  getTwoRandomBreeds = () => {
    const dogList = this.props.dogList;
    const dogListClone = [...dogList];
    const currentIndex = dogListClone.indexOf(this.state.currentBreed);
    const answer1Index = Math.floor(Math.random() * dogListClone.length);

    dogListClone.splice(currentIndex, 1);

    let answer1 = dogListClone[answer1Index];

    dogListClone.splice(answer1Index, 1);

    let answer2 = dogListClone[Math.floor(Math.random() * dogListClone.length)];

    if (answer1 !== undefined) {
      return [
        <div onClick={this.wrongAnswerClicked}>
          <DogPicture breed={answer1} />
        </div>,
        <div onClick={this.wrongAnswerClicked}>
          <DogPicture breed={answer2} />
        </div>
      ];
    } else {
      return false;
    }
  };

  /* 
  We know the first DogPicture div returned in the render method,
  is the right one. This function is bound via onClick to that div. */
  correctAnswerClicked = () => {
    alert("That's the right answer!");
  };

  /* 
  We know the two answers returned by getTwoRandomBreeds() are wrong.
  This function is bound to them via onClick */
  wrongAnswerClicked = () => {
    alert("That's the wrong answer!");
  };

  /* 
  Checks for same flag as componenDidUpdate. Return nothing
  if the required props and state are not available yet. 
  If they are available, return the name of the current breed,
  and return one DogPicture with this breed as its content. Then
  get two random, unique DogPictures from the dogList array by calling
  the getTwoRandomBreeds function. All the returned DogPicture 
  components are wrapped in a div, so that we can bind onClick to them. */

  render() {
    return (
      <div className="question">
        <React.Fragment>
          {this.state.currentBreed !== ""
            ? [
                <div className="breedName">{this.state.currentBreed}</div>,
                <div className="answers">
                  <div onClick={this.correctAnswerClicked}>
                    <DogPicture breed={this.state.currentBreed} />
                  </div>
                  {this.getTwoRandomBreeds()}
                </div>
              ]
            : false}
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogList: state.dogList
  };
};

export default connect(mapStateToProps)(PictureQuestion);