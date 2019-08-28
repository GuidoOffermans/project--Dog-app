import React, { Component } from "react";
import { connect } from "react-redux";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";
import HomeButton from "../../Layout/HomeButton/HomeButton";
import Score from "../../GameComponents/Score/Score";
import Hints from "../../GameComponents/Hints/Hints";
import GetQuestion from "../../GameComponents/GetQuestion/GetQuestion";

/* 
Functions which together return an array of all
dogs in a random order. This returned array is then 
subdivided into arrays of 3, which represent the rounds of the game */
import { shuffleArray, chunkify } from "./dogfunction";

/* 
Extra component Kelley made. Checks if required prop
(dogList form redux state) is available). If not, 
show loading text. If yes, render the actual component below,
called WithDogsPage,  */
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
          {this.props.dogList && this.props.dogList.length > 0 ? (
            <WithDogsPage dogList={this.props.dogList} />
          ) : (
            "Loading..."
          )}
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
    /* If currentGameType is set to breed, the GetQuestion components
    returns a breed question. If it's anything else, it returns a 
    picture question. This state can later be used to make a mixed 
    game. */
    currentGameType: "breed",
    dogsCurrentlyInGame: []
  };

  /* 
  Get the entire dogList from the redux state. Return an array
  of random dogs in chunks of three. componentDidMount works here,
  because the GenericGamePage component in the same file above
  already checked if the dogList prop is not empty. */
  componentDidMount = () => {
    const chunkedDogs = chunkify(shuffleArray(this.props.dogList));
    this.setState({
      dogsCurrentlyInGame: [...chunkedDogs]
    });
  };

  render() {
    return (
      <div>
        <GetQuestion
          dogsCurrentlyInGame={this.state.dogsCurrentlyInGame}
          currentGameType={this.state.currentGameType}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogList: state.dogList
  };
};

export default connect(mapStateToProps)(GenericGamePage);
