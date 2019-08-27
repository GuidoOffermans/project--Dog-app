import React, { Component } from "react";
import { connect } from "react-redux";
import DogPicture from "../../Layout/DogPicture/DogPicture";

class BreedQuestion extends Component {
  state = {
    currentBreed: "african"
  };

  componentDidMount = () => {};

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
        <div className="answer" onClick={this.wrongAnswerClicked}>
          {answer1}
        </div>,
        <div className="answer" onClick={this.wrongAnswerClicked}>
          {answer2}
        </div>
      ];
    } else {
      return false;
    }
  };

  rightAnswerClicked = () => {
    alert("You are right!");
  };

  wrongAnswerClicked = () => {
    alert("You are wrong!");
  };

  render() {
    return (
      <div className="question">
        <React.Fragment>
          {this.state.currentBreed !== ""
            ? [
                <DogPicture breed={this.state.currentBreed} />,
                <div className="answers">
                  <div onClick={this.rightAnswerClicked} className="answer">
                    {this.state.currentBreed}
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

export default connect(mapStateToProps)(BreedQuestion);
