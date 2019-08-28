import React, { Component } from "react";
import { connect } from "react-redux";
import DogPicture from "../../DogPicture/DogPicture";

let hasData = false;

class BreedQuestion extends Component {
  state = {
    currentBreed: ""
  };

  /* 
  Every time this component gets passed a new prop by GenericGamePage,
  check whether the dogList and dogsCurrentlyInGame contain any actual data.
  If yes, set the state, for the current breed (correct answer) and
  set statesSet to true, so that this only runs once, and the render
  function can continue.*/
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

  /* 
  Get array of all dogs from props, and clone it. Remove current breed
  (correct answer) from this array. Get entry from random index from
  this array. This is answer 1. Remove the entry of answer 1 from array.
  Get another random entry (answer 2) from array. Return divs with these
  answers to the render function. */
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
        <div className="answer" key="1" onClick={this.wrongAnswerClicked}>
          {answer1}
        </div>,
        <div className="answer" key="2" onClick={this.wrongAnswerClicked}>
          {answer2}
        </div>
      ];
    } else {
      return false;
    }
  };

  /* 
  We know the first answer div returned in the render method,
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
  If they are available, return the picture for the current breed,
  and return one answer div with this breed as its content. Then
  get two random, unique answers from the dogList array by calling
  the getTwoRandomBreeds function */
  render() {
    if (hasData === false) {
      return false;
    } else {
      return (
        <div className="question">
          <React.Fragment>
            {[
              <DogPicture breed={this.state.currentBreed} />,
              <div className="answers">
                <div className="answer" onClick={this.correctAnswerClicked}>
                  {this.state.currentBreed}
                </div>
                {this.getTwoRandomBreeds()}
              </div>
            ]}
          </React.Fragment>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    dogList: state.dogList
  };
};

export default connect(mapStateToProps)(BreedQuestion);
