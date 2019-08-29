import React, { Component } from 'react';
import { connect } from 'react-redux';

import { shuffleArray, chunkify } from './dogfunction';
import { setChunkedDogs } from '../../../redux/actions/gameActions';
import GamePlayContainer from './GamePlayContainer';

class GameContainer extends Component {
	componentDidMount() {
		const chunkedDogs = chunkify(shuffleArray(this.props.dogList));
		this.props.setChunkedDogs(chunkedDogs);
	}

	render() {
		return this.props.dogList.length && this.props.chunkedDogs.length ? (
			<GamePlayContainer dogList={this.props.dogList} />
		) : (
			'Loading'
		);
	}
}

const mapStateToProps = (state) => {
	return {
    dogList: state.dogList,
    chunkedDogs: state.game.chunkedDogs
	};
};

export default connect(mapStateToProps, { setChunkedDogs })(GameContainer);
