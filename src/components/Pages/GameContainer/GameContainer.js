import React, { Component } from 'react';
import { connect } from 'react-redux';

import GamePlayContainer from './GamePlayContainer';

class GameContainer extends Component {
  
  componentDidMount() {

  }

  render() {
		return this.props.dogList.length
      ? <GamePlayContainer dogList={this.props.dogList} />
      : 'Loading'
	}
}

const mapStateToProps = (state) => {
	return {
		dogList: state.dogList
	};
};

export default connect(mapStateToProps)(GameContainer);
