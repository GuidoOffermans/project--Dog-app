import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./games.css";
import { setGameType } from "../../../redux/actions/gameActions";
import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";

class Games extends Component {
  render() {
    return (
      <div id="games">
        <header>
          <BackArrow />
          <Logo />
        </header>
        <main>
          <Link
            className="link"
            to="/games/play"
            onClick={() => this.props.setGameType("breed")}
          >
            Guess the breed
          </Link>
          <Link
            className="link"
            to="/games/play"
            onClick={() => this.props.setGameType("picture")}
          >
            Guess the picture
          </Link>
          <Link
            className="link"
            to="/games/play"
            onClick={() => this.props.setGameType("mixed")}
          >
            Guess both
          </Link>
        </main>
      </div>
    );
  }
}

export default connect(
  null,
  { setGameType }
)(Games);
