import React, { Component } from 'react';
import { connect } from 'react-redux';

class Score extends Component {
	displayScore = (score) => {
		if (!score || score === Infinity) {
			return ' ';
		} else {
			return score + '%';
		}
	};

	render() {
		const score =
			this.props.score.correctAnswers /
			this.props.score.questionsAsked *
			100;
		return (
			<div id="score">
				{this.props.score.correctAnswers}/{this.props.score.questionsAsked}
				<div id="percentage">{this.displayScore(parseInt(score))}</div>
				<div id="inARow">
					<p>in a row:</p>
					<p>{this.props.correctAnswersInARow} </p>{' '}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		score: state.score,
		correctAnswersInARow: state.score.correctAnswersInARow
	};
};

export default connect(mapStateToProps)(Score);
