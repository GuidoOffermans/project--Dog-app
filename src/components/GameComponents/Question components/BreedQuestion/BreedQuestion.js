import React, { Component } from "react";
import { connect } from "react-redux";
import "./BreedQuestion.css";
import DogPicture from "../../DogPicture/DogPicture";
import {
  setCurrentBreed,
  setNextQuestion
} from "../../../../redux/actions/gameActions";

let index = 0;
class BreedQuestion extends Component {
  shuffleArray = array => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  state = { hi: "" };

  getTwoRandomBreeds = (style2, style3) => {
    const dogList = this.props.dogList;
    const dogListClone = [...dogList];
    const currentIndex = dogListClone.indexOf(this.props.currentBreed);
    const answer1Index = Math.floor(Math.random() * dogListClone.length);

    dogListClone.splice(currentIndex, 1);

    let answer1 = dogListClone[answer1Index];

    let answer1Capitalized = answer1.charAt(0).toUpperCase() + answer1.slice(1);

    dogListClone.splice(answer1Index, 1);

    let answer2 = dogListClone[Math.floor(Math.random() * dogListClone.length)];

    let answer2Capitalized = answer2.charAt(0).toUpperCase() + answer2.slice(1);

    if (answer1 !== undefined) {
      return [
        <div
          style={style2}
          className="answer"
          onClick={this.wrongAnswerClicked}
        >
          {answer1Capitalized}
        </div>,
        <div
          style={style3}
          className="answer"
          onClick={this.wrongAnswerClicked}
        >
          {answer2Capitalized}
        </div>
      ];
    } else {
      return false;
    }
  };

  correctAnswerClicked = () => {
    alert("That's the right answer!");
    index = index + 1;
    const nextDog = this.props.dogList[index];
    this.props.setCurrentBreed(nextDog);
    this.props.setNextQuestion(true);
  };

  wrongAnswerClicked = () => {
    alert("That's the wrong answer!");
    this.props.setNextQuestion(true);
  };

  render() {
    const cssOrder = this.shuffleArray([1, 2, 3]);

    const style1 = { order: cssOrder[0] };
    const style2 = { order: cssOrder[1] };
    const style3 = { order: cssOrder[2] };
    const currentBreed = this.props.currentBreed;

    return (
      <div id="breed-question" className="question">
        <React.Fragment>
          {[
            <div>
              {this.props.currentBreed.length > 0 ? (
                <DogPicture breed={this.props.currentBreed} />
              ) : (
                false
              )}
            </div>,
            <div className="answers">
              <div
                style={style1}
                className="answer"
                onClick={this.correctAnswerClicked}
              >
                {currentBreed.charAt(0).toUpperCase() + currentBreed.slice(1)}
              </div>
              {this.getTwoRandomBreeds(style2, style3)}
            </div>
          ]}
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogList: state.dogList,
    currentBreed: state.game.currentBreed
  };
};

export default connect(
  mapStateToProps,
  { setCurrentBreed, setNextQuestion }
)(BreedQuestion);
