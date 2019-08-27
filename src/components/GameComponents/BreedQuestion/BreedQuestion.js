import React, { Component } from "react";
import { connect } from "react-redux";
import DogPicture from "../../Layout/DogPicture/DogPicture";

class BreedQuestion extends Component {
  state = {
    currentBreed: ""
  };

  // componentDidMount = () => {
  //   console.log('breed question props11:', this.props)
  //   // this.setState({currentBreed: this.props.currentGameDogs[0][0]})
  // };

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
        <div className="answer">{answer1}</div>,
        <div className="answer">{answer2}</div>
      ];
    } else {
      return false;
    }
  };

  render() {
    // this.setState({currentBreed: this.props.currentGameDogs[0][0]})
    console.log('breed question props:', this.props)

    return (this.props.currentGameDogs.length == 0) ? false :
    (
      <div className="question">
        <React.Fragment>
          {this.state.currentBreed !== ""
            ? [
                <DogPicture breed={this.state.currentBreed} />,
                <div className="answers">
                  <div className="answer">{this.state.currentBreed}</div>
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

export default connect(mapStateToProps)(BreedQuestion);
