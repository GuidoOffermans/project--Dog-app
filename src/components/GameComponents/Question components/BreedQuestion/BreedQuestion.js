import React, { Component } from 'react';
import { connect } from 'react-redux';
import DogPicture from '../../DogPicture/DogPicture';

class BreedQuestion extends Component {
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
		alert("That's the right answer!");
	};

	wrongAnswerClicked = () => {
		alert("That's the wrong answer!");
	};

	render() {
		return (
			<div className="question">
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
		currentBreed: state.game.currentBreed
	};
};

export default connect(mapStateToProps)(BreedQuestion);
