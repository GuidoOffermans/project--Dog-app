import React, { Component } from 'react';
import './layout.css';
import { Route, Switch } from "react-router-dom";


import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage'

class PageContainer extends Component {
	render() {
		return (
			<div id="layout">
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={HomePage} />
						{/* <Route path="/about" component={} /> */}
						{/* <Route path="/contact" component={} /> */}
					</Switch>
				</main>
				<Footer />
			</div>
		);
	}
}

export default PageContainer;
