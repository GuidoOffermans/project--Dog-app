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
		currentGameType: 'breed',
    hasRightData: false,
    currentBreed: ''
	};

	componentDidMount = () => {
    const chunkedDogs = chunkify(shuffleArray(this.props.dogList));
    this.props.setChunkedDogs(chunkedDogs)
    this.props.setCurrentBreed('doggo')
    
	}

	// componentDidUpdate = () => {
  //   // console.log('chunkeddogs[]',this.props.chunkedDogs[0][0])
  //   if (this.props.chunkedDogs.currentBreed !== 'doggo') {
  //     this.props.setCurrentBreed('doggo')
  //   }
    
	// 	if (
	// 		this.state.hasRightData === false &&
	// 		this.props.dogList.length > 0
	// 	) {
	// 		this.setState({
	// 			currentBreed: this.props.chunkedDogs.currentBreed,
	// 			hasRightData: true
  //     });
      
	// 	}
	// };

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
