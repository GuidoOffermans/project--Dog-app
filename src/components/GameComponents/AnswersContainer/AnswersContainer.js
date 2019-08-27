import React, { Component } from "react";

import Answer from "../Answer/Answer";

class Answers extends Component {
  render() {
    return (
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
      </div>
    );
  }
}

export default Answers;
