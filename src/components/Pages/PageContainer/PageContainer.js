import React, { Component } from "react";
import "./PageContainer.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "../HomePage/HomePage";
import Games from "../Games/Games";
import DogList from "../DogList/DogList";
import DogDetail from "../DogDetail/DogDetail";
import GameContainer from "../GameContainer/GameContainer"


import { getDogs } from "../../../redux/actions/dogListActions";

class PageContainer extends Component {
  componentDidMount() {
    this.props.getDogs();
  }

  render() {
    return (
      <div className="page-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/dog-list" component={DogList} />
          <Route path="/dog-list/:breed" component={DogDetail} />
          <Route path="/games/play" component={GameContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs
  };
};

export default connect(
  mapStateToProps,
  { getDogs }
)(PageContainer);
