import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";
import HomeButton from "../../Layout/HomeButton/HomeButton";
import Score from "../../GameComponents/Score/Score";
import Hints from "../../GameComponents/Hints/Hints";
import PictureAnswers from "../../GameComponents/PictureAnswers/PictureAnswers";
import { getScore } from "../../../redux/actions/scoreAction";

class GuessPictureGame extends Component {
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
          <PictureAnswers />
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
)(GuessPictureGame);
