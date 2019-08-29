import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./dogList.css";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";

export class DogList extends Component {
  generateAlphabet = () => {
    return "abcdefghijklmnopqrstuwyxz".toUpperCase().split("");
  };
  groupByLetter = () => {
    return this.props.dogList.reduce((result, dogName) => {
      let firstLetter = dogName.charAt(0).toUpperCase();
      if (result.hasOwnProperty(firstLetter)) {
        result[firstLetter].push(dogName);
      } else {
        result[firstLetter] = [dogName];
      }
      console.log(result);
      return result;
    }, {});
  };
  render() {
    const listOfDogs = this.groupByLetter();
    console.log(Object.keys(listOfDogs));

    return (
      <div>
        <header>
          <BackArrow />
          <Logo />
        </header>
        <div className="alphabet-picker">
          {this.generateAlphabet().map(letter => {
            return (
              <div>
                <a href={`/dog-list#${letter}`}>{letter}</a>
              </div>
            );
          })}
        </div>
        <main id="dogList-main">
          {Object.keys(listOfDogs).map(key => {
            return (
              <div>
                <h3 id={key}>{key}</h3>
                {listOfDogs[key].map(dog => {
                  return (
                    <div>
                      <Link to={"/dog-list/" + dog}>
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
