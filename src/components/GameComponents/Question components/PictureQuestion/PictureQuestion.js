import React, { Component } from "react";
import { connect } from "react-redux";
import DogPicture from "../../DogPicture/DogPicture";
import {
  setCurrentBreed,
  setNextQuestion
} from "../../../../redux/actions/gameActions";
import { setScore } from "../../../../redux/actions/scoreAction";
import "./PictureQuestion.css";

let index = 0;

class PictureQuestion extends Component {
  componentDidMount() {
    this.props.setScore({
      questionsAsked: 0,
      correctAnswers: 0
    });
  }

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

  getTwoRandomBreeds = (style2, style3) => {
    const dogList = this.props.dogList;
    const dogListClone = [...dogList];
    const currentIndex = dogListClone.indexOf(this.props.currentBreed);
    const answer1Index = Math.floor(Math.random() * dogListClone.length);

    dogListClone.splice(currentIndex, 1);

    let answer1 = dogListClone[answer1Index];

    dogListClone.splice(answer1Index, 1);

    let answer2 = dogListClone[Math.floor(Math.random() * dogListClone.length)];

    if (answer1 !== undefined) {
      return [
        <div style={style2} onClick={this.wrongAnswerClicked}>
          <DogPicture breed={answer1} />
        </div>,
        <div style={style3} onClick={this.wrongAnswerClicked}>
          <DogPicture breed={answer2} />
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
    const questionsAsked = this.props.score.questionsAsked;
    const correctAnswers = this.props.score.correctAnswers;
    this.props.setScore({
      questionsAsked: questionsAsked + 1,
      correctAnswers: correctAnswers + 1
    });
  };

  wrongAnswerClicked = () => {
    alert("That's the wrong answer!");
    this.props.setNextQuestion(true);
    const questionsAsked = this.props.score.questionsAsked;
    this.props.setScore({
      questionsAsked: questionsAsked + 1
    });
  };

  render() {
    const cssOrder = this.shuffleArray([1, 2, 3]);

    const style1 = { order: cssOrder[0] };
    const style2 = { order: cssOrder[1] };
    const style3 = { order: cssOrder[2] };
    const currentBreed = this.props.currentBreed;

    return (
      <div id="picture-question" className="question">
        <React.Fragment>
          {this.props.currentBreed !== ""
            ? [
                <div className="breedName">
                  {currentBreed.charAt(0).toUpperCase() + currentBreed.slice(1)}
                </div>,
                <div className="answers">
                  <div style={style1} onClick={this.correctAnswerClicked}>
                    <DogPicture breed={this.props.currentBreed} />
                  </div>
                  {this.getTwoRandomBreeds(style2, style3)}
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
    dogList: state.dogList,
    currentBreed: state.game.currentBreed,
    score: state.score
  };
};

export default connect(
  mapStateToProps,
  { setCurrentBreed, setNextQuestion, setScore }
)(PictureQuestion);
