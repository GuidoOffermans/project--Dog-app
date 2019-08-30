import React, { Component } from "react";
import { connect } from "react-redux";
import "./DogDetail.css"

import Logo from "../../Layout/Logo/Logo";
import BackArrow from "../../Layout/BackArrow/BackArrow";
import HomeButton from "../../Layout/HomeButton/HomeButton";

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
          <HomeButton />
        </header>
        <main id="dog-detail">
          <div className="header">Pictures</div>
          {this.props.images.map((image, index) =>
            index < 10 ? <img key={index} src={image} alt="dog" /> : false
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
