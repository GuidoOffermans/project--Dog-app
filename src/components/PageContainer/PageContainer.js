import React, { Component } from "react";
import "./PageContainer.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "../Pages/HomePage/HomePage";
import Games from "../Pages/Games/Games";
import DogList from "../Pages/DogList/DogList";
import DogDetail from "../Pages/DogDetail/DogDetail";
import GuessBreedGame from "../Pages/GuessBreedGame/GuessBreedGame";
import GuessPictureGame from "../Pages/GuessPictureGame/GuessPictureGame";
import GuessPictureOrBreed from "../Pages/GuessPictureOrBreed/GuessPictureOrBreed";
import GenericGamePage from "../Pages/GenericGamePage/GenericGamePage";


import { getDogs } from "../../redux/actions/dogListActions";

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
          <Route path="/games/guess-the-breed" component={GuessBreedGame} />
          <Route path="/games/guess-the-picture" component={GuessPictureGame} />
          <Route path="/games/guess-picture-or-breed" component={GuessPictureOrBreed} />
          <Route path="/games/game" component={GenericGamePage} />
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
