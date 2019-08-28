import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shuffleArray, chunkify } from './dogfunction';

import Logo from '../../Layout/Logo/Logo';
import BackArrow from '../../Layout/BackArrow/BackArrow';
import HomeButton from '../../Layout/HomeButton/HomeButton';
import Score from '../../GameComponents/Score/Score';
import Hints from '../../GameComponents/Hints/Hints';
import GetQuestion from '../../GameComponents/GetQuestion/GetQuestion';

class GameContainer extends Component {
	state = {
		currentGameType: 'breed',
		dogsCurrentlyInGame: [],
		hasRightData: false
	};

	componentDidUpdate = () => {
		if (
			this.state.hasRightData === false &&
			this.props.dogList.length > 0
		) {
			const chunkedDogs = chunkify(shuffleArray(this.props.dogList));
			this.setState({
				currentBreed: chunkedDogs[0][0],
				dogsCurrentlyInGame: chunkedDogs,
				hasRightData: true
			});
			// this.setState({ dogsCurrentlyInGame: chunkedDogs });
			// this.setState({hasRightData: true})
		}
	};

	render() {
		return (
			<div>
				<header>
					<BackArrow />
					<HomeButton />
					<Logo />
					<Score />
				</header>
				<main>
					<GetQuestion
						dogsCurrentlyInGame={this.state.dogsCurrentlyInGame}
						currentGameType={this.state.currentGameType}
					/>
				</main>
				<footer>
					<Hints />
				</footer>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		dogList: state.dogList
	};
};

export default connect(mapStateToProps)(GameContainer);
