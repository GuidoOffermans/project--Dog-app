import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from '../../Layout/Logo/Logo';
import BackArrow from '../../Layout/BackArrow/BackArrow';
import HomeButton from '../../Layout/HomeButton/HomeButton';
import Score from '../../GameComponents/Score/Score';
import Hints from '../../GameComponents/Hints/Hints';
import GetQuestion from '../../GameComponents/GetQuestion/GetQuestion';

/* 
Functions which together return an array of all
dogs in a random order. This returned array is then 
subdivided into arrays of 3, which represent the rounds of the game */
import { shuffleArray, chunkify } from './dogfunction';

/* 
Extra component Kelley made. Checks if required prop
(dogList form redux state) is available). If not, 
show loading text. If yes, render the actual component below,
called WithDogsPage,  */


class GameContainer extends Component {
	state = {
		currentGameType: 'breed',
		dogsCurrentlyInGame: [],
		hasRightData: false
	};

	componentDidUpdate = () => {
		if (this.state.hasRightData === false && this.props.dogList.length > 0) {
			const chunkedDogs = chunkify(shuffleArray(this.props.dogList));
			this.setState({ currentBreed: chunkedDogs[(0)[0]] });
			this.setState({ dogsCurrentlyInGame: chunkedDogs });
			this.setState({hasRightData: true})
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
