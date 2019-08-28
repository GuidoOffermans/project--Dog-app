import React, { Component } from "react";
import { connect } from "react-redux";
import DogPicture from "../../DogPicture/DogPicture";

let hasRightData = false;

class BreedQuestion extends Component {
  state = {
    currentBreed: ""
  };

  componentDidUpdate = () => {
    if (
      hasRightData === false &&
      this.props.dogsCurrentlyInGame.length > 0 &&
      this.props.dogList.length > 0
    ) {
      this.setState({ currentBreed: this.props.dogsCurrentlyInGame[0][0] });
      hasRightData = true;
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
        <div className="answer"  onClick={this.wrongAnswerClicked}>
          {answer1}
        </div>,
        <div className="answer"  onClick={this.wrongAnswerClicked}>
          {answer2}
        </div>
      ];
    } else {
      return false;
    }
  };

  correctAnswerClicked = () => {
    alert("That's the right answer!");
  };

  wrongAnswerClicked = () => {
    alert("That's the wrong answer!");
  };

  render() {
    if (hasRightData === false) {
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
