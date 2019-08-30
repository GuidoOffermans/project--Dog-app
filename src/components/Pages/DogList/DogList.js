import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./dogList.css";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";
import HomeButton from "../../Layout/HomeButton/HomeButton";

export class DogList extends Component {
  generateAlphabet = () => {
    return "abcdefghijklmnopqrstuvwyxz".toUpperCase().split("");
  };
  groupByLetter = () => {
    return this.props.dogList.reduce((result, dogName) => {
      let firstLetter = dogName.charAt(0).toUpperCase();
      if (result.hasOwnProperty(firstLetter)) {
        result[firstLetter].push(dogName);
      } else {
        result[firstLetter] = [dogName];
      }
      return result;
    }, {});
  };
  render() {
    const listOfDogs = this.groupByLetter();
    const alphabet = this.generateAlphabet();
    const commonLetters = alphabet.filter(letter =>
      Object.keys(listOfDogs).includes(letter)
    );
    return (
      <div>
        <header>
          <BackArrow />
          <HomeButton />
          <Logo />
        </header>
        <div className="alphabet-picker">
          {commonLetters.map(letter => {
            return (
              <div className='letter' key={letter}>
                <a href={`/dog-list#${letter}`}>{letter}</a>
              </div>
            );
          })}
        </div>
        <main id="dogList-main">
          {Object.keys(listOfDogs).map(key => {
            return (
              <div key={key}>
                <h3 id={key}>{key}</h3>
                {listOfDogs[key].map(dog => {
                  return (
                    <div key={dog}>
                      <Link className='link' to={"/dog-list/" + dog}>
                        {dog.charAt(0).toUpperCase() + dog.slice(1)}
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dogList: state.dogList
  };
};

export default connect(mapStateToProps)(DogList);
