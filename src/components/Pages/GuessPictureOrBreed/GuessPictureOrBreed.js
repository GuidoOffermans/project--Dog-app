import React, { Component } from "react";
import { connect } from "react-redux";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";
import HomeButton from "../../Layout/HomeButton/HomeButton";
import Score from "../../GameComponents/Score/Score";
import Hints from "../../GameComponents/Hints/Hints";
import AnswersContainer from "../../GameComponents/AnswersContainer/AnswersContainer";
import DogPicture from "../../Layout/DogPicture/DogPicture";
import { getScore } from "../../../redux/actions/scoreAction";

class GuessPictureOrBreed extends Component {
  componentDidMount() {
    // this.props.getScore(score);
  }
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
        </main>
        <footer>
          <Hints />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { getScore }
)(GuessPictureOrBreed);
