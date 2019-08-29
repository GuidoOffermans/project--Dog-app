import React, { Component } from "react";
import { connect } from "react-redux";
import DogPicture from "../../DogPicture/DogPicture";
import {
  setCurrentBreed,
  setNextQuestion
} from "../../../../redux/actions/gameActions";
import { setScore } from "../../../../redux/actions/scoreAction";
let index = 0;

class PictureQuestion extends Component {
  componentDidMount() {
    this.props.setScore({
      questionsAsked: 0,
      correctAnswers: 0
    });
  }

  getTwoRandomBreeds = () => {
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
    return (
      <div className="question">
        <React.Fragment>
          {this.props.currentBreed !== ""
            ? [
                <div className="breedName">{this.props.currentBreed}</div>,
                <div className="answers">
                  <div onClick={this.correctAnswerClicked}>
                    <DogPicture breed={this.props.currentBreed} />
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
    dogList: state.dogList,
    currentBreed: state.game.currentBreed,
    score: state.score
  };
};

export default connect(
  mapStateToProps,
  { setCurrentBreed, setNextQuestion, setScore }
)(PictureQuestion);
