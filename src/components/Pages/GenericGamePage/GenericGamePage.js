import React, { Component } from "react";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";
import HomeButton from "../../Layout/HomeButton/HomeButton";
import Score from "../../GameComponents/Score/Score";
import Hints from "../../GameComponents/Hints/Hints";
import GetQuestion from "../../GameComponents/GetQuestion/GetQuestion";

class GenericGamePage extends Component {
  state = {
    currentGameType: "breedd"
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
          <GetQuestion currentGameType={this.state.currentGameType} />
        </main>
        <footer>
          <Hints />
        </footer>
      </div>
    );
  }
}

export default GenericGamePage;
