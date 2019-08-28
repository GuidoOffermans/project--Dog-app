import React, { Component } from "react";

class Hints extends Component {
  state = { showHint: false };
  handleClick = () => {
    this.setState({ showHint: true });
  };
  getFirstLetterOfBreed = breed => {
    return breed.slice(0, 1);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          GET HINT
        </button>
        {this.state.showHint && (
          <div>{this.getFirstLetterOfBreed("cutie")}</div>
        )}
      </div>
    );
  }
}

export default Hints;
