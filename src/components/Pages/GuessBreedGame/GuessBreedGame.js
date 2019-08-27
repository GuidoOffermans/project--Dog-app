import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";
import HomeButton from "../../Layout/HomeButton/HomeButton";
import Score from "../../GameComponents/Score/Score";
import Hints from "../../GameComponents/Hints/Hints";
import AnswersContainer from "../../GameComponents/AnswersContainer/AnswersContainer";
import DogPicture from "../../Layout/DogPicture/DogPicture";
import SetStarterDogs from '../../GameComponents/SetStarterDogs/SetStarterDogs'

class HomePage extends Component {
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
          <DogPicture breed="african" />
          <AnswersContainer />
          <SetStarterDogs/>
        </main>
        <footer>
          <Hints />
        </footer>
      </div>
    );
  }
}

export default HomePage;
