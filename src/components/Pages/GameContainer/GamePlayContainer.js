import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setCurrentBreed,
  setGameType,
  setNextQuestion,
  addNextChunk,
  clearDogPool
} from "../../../redux/actions/gameActions";
import { setScore } from "../../../redux/actions/scoreAction";
import { showHint } from "../../../redux/actions/hintAction";

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
    this.props.clearDogPool();
    this.props.addNextChunk();
    this.props.showHint(false);
    setTimeout(
      () => this.props.setCurrentBreed(this.props.currentDogpool[0]),
      100
    );

    this.props.setScore({
      questionsAsked: 0,
      correctAnswers: 0,
      correctAnswersInARow: 0
    });

    if (this.props.gameType === "mixed") {
      const gameTypes = ["breed", "picture"];
      const randomGameType =
        gameTypes[Math.floor(Math.random() * gameTypes.length)];
      this.setState({ previousGameType: randomGameType });
    }
  };

  runsEachRound = () => {
    this.switchIfMixedGame();
    this.props.showHint(false);
    this.props.setNextQuestion(false);
  };

  switchIfMixedGame = () => {
    if (this.state.previousGameType === "breed") {
      this.setState({ previousGameType: "picture" });
      return "picture";
    } else {
      this.setState({ previousGameType: "breed" });
      return "breed";
    }
  };

  render() {
    if (this.props.onToNextQuestion) {
      this.runsEachRound();
    }

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
              this.props.gameType === "mixed"
                ? this.state.previousGameType
                : this.props.gameType
            }
          />
        </main>
        <footer>
          <Hints
            currentBreed={this.props.currentBreed}
            gameType={
              this.props.gameType === "mixed"
                ? this.state.previousGameType
                : this.props.gameType
            }
          />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogList: state.dogList,
    chunkedDogs: state.game.chunkedDogs,
    gameType: state.game.gameType,
    onToNextQuestion: state.game.onToNextQuestion,
    currentDogpool: state.game.currentDogpool
  };
};

export default connect(
  mapStateToProps,
  {
    setCurrentBreed,
    setGameType,
    setNextQuestion,
    setScore,
    addNextChunk,
    clearDogPool,
    showHint
  }
)(GameContainer);
