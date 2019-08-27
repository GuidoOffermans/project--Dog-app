import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";

export class DogList extends Component {

  render() {

    const listOfDogs = this.props.dogList

    return (
      <div>
        <header>
          <Logo />
          <BackArrow />
        </header>
        <main>
          {listOfDogs.map(dog => {
            return <Link to={"/dog-list/" + dog}>{dog}</Link>
          })}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dogList: state.dogList
  }
}

export default connect(mapStateToProps)(DogList)
