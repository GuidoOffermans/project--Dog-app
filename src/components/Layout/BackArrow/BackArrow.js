import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BackArrowIcon from "../../../images/back.svg";

class BackArrow extends Component {
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <img
        className="backArrow"
        src={BackArrowIcon}
        onClick={this.goBack}
        alt="Back"
      />
    );
  }
}

export default withRouter(BackArrow);
