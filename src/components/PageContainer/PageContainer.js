import React, { Component } from 'react';
import './PageContainer.css';
import { Route, Switch } from "react-router-dom";

// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
import HomePage from '../Pages/HomePage/HomePage'
import Games from "../Pages/Games/Games"
import DogList from "../Pages/DogList/DogList"
import DogDetail from "../Pages/DogDetail/DogDetail"
import GuessBreedGame from "../Pages/GuessBreedGame/GuessBreedGame"
import GuessPictureGame from "../Pages/GuessPictureGame/GuessPictureGame"

class PageContainer extends Component {
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
				</Switch>
			</div>
		);
	}
}

export default PageContainer;
