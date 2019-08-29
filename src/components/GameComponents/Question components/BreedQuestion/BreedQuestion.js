import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./BreedQuestion.css"
import DogPicture from '../../DogPicture/DogPicture';
import { selectNext } from '../../../Pages/GameContainer/dogfunction';
import { setCurrentBreed, setNextQuestion } from '../../../../redux/actions/gameActions';

class BreedQuestion extends Component {
	state = { hi: '' };
	getTwoRandomBreeds = () => {
		const dogList = this.props.dogList;
		const dogListClone = [ ...dogList ];
		const currentIndex = dogListClone.indexOf(this.props.currentBreed);
		const answer1Index = Math.floor(Math.random() * dogListClone.length);

		dogListClone.splice(currentIndex, 1);

		let answer1 = dogListClone[answer1Index];

		dogListClone.splice(answer1Index, 1);

		let answer2 =
			dogListClone[Math.floor(Math.random() * dogListClone.length)];

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

	correctAnswerClicked = () => {
    const fiveInARow = true;
		alert("That's the right answer!");
    const nextDog = selectNext(this.props.currentDogpool, fiveInARow)
    console.log(nextDog)
		this.props.setCurrentBreed(nextDog);
		this.props.setNextQuestion(true)
	};

	wrongAnswerClicked = () => {
		alert("That's the wrong answer!");
		this.props.setNextQuestion(true)
	};

	render() {
		return (
			<div id="breed-question" className="question">
				<React.Fragment>
					{[
						<div>
							{this.props.currentBreed !== '' ? (
								<DogPicture breed={this.props.currentBreed} />
							) : (
								false
							)}
						</div>,
						<div className="answers">
							<div
								className="answer"
								onClick={this.correctAnswerClicked}
							>
								{this.props.currentBreed}
							</div>
							{this.getTwoRandomBreeds()}
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
    chunkedDogs: state.game.chunkedDogs,
    currentDogpool: state.game.currentDogpool
	};
};

export default connect(mapStateToProps, { setCurrentBreed, setNextQuestion })(BreedQuestion);
