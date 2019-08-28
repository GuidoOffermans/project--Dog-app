import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffleArray, chunkify } from "./dogfunction";
import {
  setChunkedDogs,
  setCurrentBreed,
  setGameType
} from "../../../redux/actions/gameActions";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";
import HomeButton from "../../Layout/HomeButton/HomeButton";
import Score from "../../GameComponents/Score/Score";
import Hints from "../../GameComponents/Hints/Hints";
import GetQuestion from "../../GameComponents/Question components/GetQuestion/GetQuestion";

class GameContainer extends Component {
  componentDidMount = () => {
    const chunkedDogs = chunkify(shuffleArray(this.props.dogList));
    this.props.setChunkedDogs(chunkedDogs);
    this.props.setCurrentBreed(this.props.dogList[3]);
    // this.props.setGameType("");
  };

  render() {
    console.log("props", this.props);
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
            gameType={this.props.gameType}
          />
        </main>
        <footer>
          <Hints />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogList: state.dogList,
    chunkedDogs: state.game,
    gameType: state.game.gameType
  };
};

export default connect(
  mapStateToProps,
  { setChunkedDogs, setCurrentBreed, setGameType }
)(GameContainer);
