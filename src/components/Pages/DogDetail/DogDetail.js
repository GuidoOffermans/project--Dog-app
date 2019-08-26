import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";

import { getImages } from "../../../redux/actions/imagesAction";

class DogDetail extends Component {
  componentDidMount() {
    const breed = this.props.match.params.breed;
    this.props.getImages(breed);
  }
  render() {
    return (
      <div>
        <header>
          <Logo />
          <BackArrow />
        </header>
        <main>
          Dog Details
          {this.props.images.map((image, index) =>
            index < 10 ? <img src={image} alt="dog" /> : false
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.dogImages
  };
};

export default connect(
  mapStateToProps,
  { getImages }
)(DogDetail);
