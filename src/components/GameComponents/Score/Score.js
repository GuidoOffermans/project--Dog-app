import React, { Component } from "react";
import { connect } from "react-redux";

class Score extends Component {
  render() {
    const score =
      (this.props.score.questionsAsked / this.props.score.correctAnswers) * 100;
    return <div>{score}</div>;
  }
}

const mapStateToProps = state => {
  return {
    score: state.score
  };
};

export default connect(mapStateToProps)(Score);
