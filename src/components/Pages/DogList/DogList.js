import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './dogList.css'

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";

export class DogList extends Component {

  render() {

    const listOfDogs = this.props.dogList

    return (
      <div>
        <header>
        <BackArrow />
          <Logo />
        </header>
        <main id='dogList-main'>
          {listOfDogs.map((dog, index) => {
            return <Link key={index} className="link" to={"/dog-list/" + dog}>{dog}</Link>
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
