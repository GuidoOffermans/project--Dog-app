import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BreedQuestion.css';
import DogPicture from '../../DogPicture/DogPicture';
import { selectNext } from '../../../Pages/GameContainer/dogfunction';
import {
	setCurrentBreed,
	setNextQuestion,
	addNextChunk
} from '../../../../redux/actions/gameActions';
import { shuffleArray } from '../../../Pages/GameContainer/dogfunction';
import { setScore } from '../../../../redux/actions/scoreAction';

class BreedQuestion extends Component {
	getTwoRandomBreeds = (style2, style3) => {
		let answer1;
		let answer2;
		const dogList = this.props.dogList;
		const dogListClone = [ ...dogList ];
		const currentIndex = dogListClone.indexOf(this.props.currentBreed);
		const answer1Index = Math.floor(Math.random() * dogListClone.length);

		dogListClone.splice(currentIndex, 1);

		answer1 = dogListClone[answer1Index];

		dogListClone.splice(answer1Index, 1);

		answer2 = dogListClone[Math.floor(Math.random() * dogListClone.length)];

		if (answer1 !== undefined) {
			let answer1Capitalized =
				answer1.charAt(0).toUpperCase() + answer1.slice(1);
			let answer2Capitalized =
				answer2.charAt(0).toUpperCase() + answer2.slice(1);

			return [
				<div
					style={style2}
					ref="incorrect1"
					className="answer"
					onClick={this.wrongAnswerClicked}
					key="5"
				>
					{answer1Capitalized}
				</div>,
				<div
					style={style3}
					ref="incorrect2"
					className="answer"
					onClick={this.wrongAnswerClicked}
					key="6"
				>
					{answer2Capitalized}
				</div>
			];
		} else {
			return this.getTwoRandomBreeds(style2, style3);
		}
	};

	correctAnswerClicked = () => {
		alert("That's the right answer!");
		const nextDog = selectNext(
			this.props.currentDogpool,
			this.props.currentBreed
		);
		this.props.setCurrentBreed(nextDog);
		this.props.setNextQuestion(true);
		const questionsAsked = this.props.score.questionsAsked;
		const correctAnswers = this.props.score.correctAnswers;
		const correctAnswersInARow = this.props.score.correctAnswersInARow;
		this.props.setScore({
			questionsAsked: questionsAsked + 1,
			correctAnswers: correctAnswers + 1,
			correctAnswersInARow: correctAnswersInARow + 1
		});
		if (correctAnswersInARow === 4) {
      alert('GOOD JOB! you have 5 in a row || three more dogs have been added to the game')
			this.props.addNextChunk();
			this.props.setScore({
				correctAnswersInARow: 0
			});
		}
	};

	wrongAnswerClicked = () => {
		const incorrect1 = this.refs.incorrect1;
		const incorrect2 = this.refs.incorrect2;

		setTimeout(() => {
			alert("Oops! That's wrong. This is the right answer");
			const nextDog = selectNext(
				this.props.currentDogpool,
				this.props.currentBreed
			);
			this.props.setCurrentBreed(nextDog);
			incorrect1.style.display = 'block';
			incorrect2.style.display = 'block';
			this.props.setNextQuestion(true);
			const questionsAsked = this.props.score.questionsAsked;
			const correctAnswers = this.props.score.correctAnswers;
			this.props.setScore({
				questionsAsked: questionsAsked + 1,
				correctAnswers: correctAnswers,
				correctAnswersInARow: 0
			});
		}, 2000);

		incorrect1.style.display = 'none';
		incorrect2.style.display = 'none';
	};

	render() {
		const cssOrder = shuffleArray([ 1, 2, 3 ]);

		const style1 = { order: cssOrder[0] };
		const style2 = { order: cssOrder[1] };
		const style3 = { order: cssOrder[2] };
		const currentBreed = this.props.currentBreed;

		return (
			<div id="breed-question" className="question">
				<React.Fragment>
					{[
						<div key="1">
							{this.props.currentBreed.length > 0 ? (
								<DogPicture breed={this.props.currentBreed} />
							) : (
								false
							)}
						</div>,
						<div key="2" className="answers">
							<div
								style={style1}
								className="answer"
								onClick={this.correctAnswerClicked}
								key="3"
							>
								{currentBreed.charAt(0).toUpperCase() +
									currentBreed.slice(1)}
							</div>
							{this.getTwoRandomBreeds(style2, style3)}
						</div>
					]}
				</React.Fragment>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		dogList: state.dogList,
		currentBreed: state.game.currentBreed,
		score: state.score,
		currentDogpool: state.game.currentDogpool
	};
};

export default connect(mapStateToProps, {
	setCurrentBreed,
	setNextQuestion,
	setScore,
	addNextChunk
})(BreedQuestion);
