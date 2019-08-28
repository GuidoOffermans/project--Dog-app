import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shuffleArray, chunkify } from './dogfunction';
import { setChunkedDogs, setCurrentBreed } from '../../../redux/actions/gameActions';

import Logo from '../../Layout/Logo/Logo';
import BackArrow from '../../Layout/BackArrow/BackArrow';
import HomeButton from '../../Layout/HomeButton/HomeButton';
import Score from '../../GameComponents/Score/Score';
import Hints from '../../GameComponents/Hints/Hints';
import GetQuestion from '../../GameComponents/Question components/GetQuestion/GetQuestion';

class GameContainer extends Component {
	state = {
		currentGameType: 'breedS',
    hasRightData: false,
    currentBreed: ''
	};

	componentDidMount = () => {
    const chunkedDogs = chunkify(shuffleArray(this.props.dogList));
    this.props.setChunkedDogs(chunkedDogs)
    this.props.setCurrentBreed('bulldog')
    
	}

	render() {
    console.log('props',this.props)
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
            currentBreed={this.props.currentBreed}
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
    dogList: state.dogList,
    chunkedDogs: state.game

	};
};

export default connect(mapStateToProps, { setChunkedDogs, setCurrentBreed })(GameContainer);
