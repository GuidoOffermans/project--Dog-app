import React, { Component } from "react";
import { connect } from "react-redux";

class Score extends Component {
  displayScore = score => {
    if (!score) {
      return " ";
    } else {
      return score;
    }
  };

  render() {
    const score =
      this.props.score.questionsAsked / (this.props.score.correctAnswers * 100);

    return (
      <div>
        {this.props.score.correctAnswers}/{this.props.score.questionsAsked}
        <div>{this.displayScore(score)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.score
  };
};

export default connect(mapStateToProps)(Score);
