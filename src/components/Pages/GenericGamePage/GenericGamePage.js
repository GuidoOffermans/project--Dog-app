import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from '../../Layout/Logo/Logo';
import BackArrow from '../../Layout/BackArrow/BackArrow';
import HomeButton from '../../Layout/HomeButton/HomeButton';
import Score from '../../GameComponents/Score/Score';
import Hints from '../../GameComponents/Hints/Hints';
import GetQuestion from '../../GameComponents/GetQuestion/GetQuestion';
import {shuffleArray, chunkify} from './dogfunction'

class GenericGamePage extends Component {
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
          {this.props.dogs && this.props.dogs.length > 0 ? <WithDogsPage dogs={this.props.dogs} /> : "Loading..."}
				</main>
				<footer>
					<Hints />
				</footer>
			</div>
		);
	}
}

class WithDogsPage extends Component {
	state = {
    currentGameType: 'breed',
    currentGameDogs: []
  };

  componentDidMount = () => {
    // console.log('this.props.dogs',this.props.dogs)
    const chunkedDogs = chunkify(shuffleArray(this.props.dogs));
    // console.log(chunkedDogs)
    this.setState({
      currentGameDogs: [...chunkedDogs]
    })
  }

	render() {
	// console.log('chunkiechunk:', this.state.currentGameDogs)
	// console.log('renderdoglist:', this.props.dogs)
	
		return this.props.dogs.length < 1 ? false : (
			<div>
        		<GetQuestion currentGameDogs={this.state.currentGameDogs} currentGameType={this.state.currentGameType} />
			</div> 
		);
	}
}

const mapStateToProps = (state) => {
	return {
		dogs: state.dogList
	};
};

export default connect(mapStateToProps)(GenericGamePage);
