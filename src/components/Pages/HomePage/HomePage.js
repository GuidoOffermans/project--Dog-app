import React, { Component } from 'react';
import { Link } from "react-router-dom"

import Logo from "../../Layout/Logo/Logo"

class HomePage extends Component {
	render() {
		return (
			<div>
				<header>
					<Logo />
				</header>
				<main>
					<Link to="/games">Games</Link>
					<Link to="/dog-list">List of dogs</Link>
				</main>
				<footer>
					<div>
						Credits: Maxim, Guido, Andreea
					</div>
				</footer>
			</div>
		);
	}
}

export default HomePage;
