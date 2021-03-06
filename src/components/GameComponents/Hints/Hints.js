import React, { Component } from "react";
import { connect } from "react-redux";
import { showHint } from "../../../redux/actions/hintAction";
import DogPicture from "../DogPicture/DogPicture";

class Hints extends Component {
  handleClick = () => {
    this.props.showHint(true);
  };
  getFirstLetterOfBreed = breed => {
    return breed.slice(0, 1);
  };

  render() {
    return (
      <div id="hintDiv">
        <button type="button" id="hintButton" onClick={this.handleClick}>
          GET HINT
        </button>
        {this.props.gameType === "breed"
          ? this.props.hint && (
              <div id="letterHint">
                {this.getFirstLetterOfBreed(
                  this.props.currentBreed
                ).toUpperCase()}
              </div>
            )
          : this.props.hint && (
              <div id="pictureHint">
                <DogPicture breed={this.props.currentBreed} />
              </div>
            )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentBreed: state.game.currentBreed,
    hint: state.hint
  };
};

export default connect(
  mapStateToProps,
  { showHint }
)(Hints);
