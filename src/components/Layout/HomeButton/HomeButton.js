import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router'
import HomeIcon from "../../../images/home.svg";

class HomeButton extends Component {

  state = {
    redirect: false
  };
  
  goHome = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <img
        className="homeButton"
        src={HomeIcon}
        onClick={this.goHome}
        alt="Home"
      />
    );
  }
}

export default withRouter(HomeButton);
