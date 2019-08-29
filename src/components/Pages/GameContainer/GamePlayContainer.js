import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffleArray, chunkify } from "./dogfunction";
import {
  setChunkedDogs,
  setCurrentBreed,
  setGameType,
  setNextQuestion
} from "../../../redux/actions/gameActions";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";
import HomeButton from "../../Layout/HomeButton/HomeButton";
import Score from "../../GameComponents/Score/Score";
import Hints from "../../GameComponents/Hints/Hints";
import GetQuestion from "../../GameComponents/Question components/GetQuestion/GetQuestion";

class GameContainer extends Component {
  state = {
    previousGameType: ""
  };

  componentDidMount = () => {
    const chunkedDogs = chunkify(shuffleArray(this.props.dogList));
    this.props.setChunkedDogs(chunkedDogs);
    this.props.setCurrentBreed(this.props.dogList[3]);

    if (this.props.gameType === "mixed") {
      const gameTypes = ["breed", "picture"];
      const randomGameType =
        gameTypes[Math.floor(Math.random() * gameTypes.length)];
      this.setState({ previousGameType: randomGameType });
    }
  };

  mixedGameType = () => {
    this.props.setNextQuestion(false)

    if (this.state.previousGameType === "breed") {
      this.setState({ previousGameType: "picture" });
      return "picture";
    } else {
      this.setState({ previousGameType: "breed" });
      return "breed";
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
            currentBreed={this.props.currentBreed}
            gameType={
              (this.props.gameType === "mixed")
                ? (this.props.onToNextQuestion)
                  ? this.mixedGameType()
                  : this.state.previousGameType
                : this.props.gameType
            }
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
    gameType: state.game.gameType,
    onToNextQuestion: state.game.onToNextQuestion
  };
};

export default connect(
  mapStateToProps,
  { setChunkedDogs, setCurrentBreed, setGameType, setNextQuestion }
)(GameContainer);
