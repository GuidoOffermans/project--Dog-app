import React, { Component } from "react";
import { connect } from "react-redux";
// import { Route, Link } from "react-router-dom";
import DogPicture from "../../Layout/DogPicture/DogPicture";
// import DogPicture from "../../Layout/DogPicture/DogPicture";

class PictureQuestion extends Component {
  state = {
    currentBreed: "african"
  };

  componentDidMount = () => {};

  getTwoRandomBreeds = () => {
    const dogList = this.props.dogList;
    const dogListClone = [...dogList];
    const currentIndex = dogListClone.indexOf(this.state.currentBreed);
    const answer1Index = Math.floor(Math.random() * dogListClone.length);

    dogListClone.splice(currentIndex, 1);

    let answer1 = dogListClone[answer1Index];

    dogListClone.splice(answer1Index, 1);

    let answer2 = dogListClone[Math.floor(Math.random() * dogListClone.length)];

    if (answer1 !== undefined) {
      return [
        <DogPicture breed={answer1} />,
        <DogPicture breed={answer2} />
      ];
    } else {
      return false
    }
  };

  render() {
    return (
      <div className="question">
        <React.Fragment>
          {this.state.currentBreed !== ""
            ? [
                <div className="breedName">{this.state.currentBreed}</div>,
                <div className="answers">
                  <DogPicture breed={this.state.currentBreed}/>
                  {this.getTwoRandomBreeds()}
                </div>
              ]
            : false}
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogList: state.dogList
  };
};

export default connect(mapStateToProps)(PictureQuestion);
