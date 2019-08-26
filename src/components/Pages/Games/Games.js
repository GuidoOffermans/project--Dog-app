import React, { Component } from 'react';
import { Link } from "react-router-dom"

import Logo from "../../Layout/Logo/Logo"
import BackArrow from "../../Layout/BackArrow/BackArrow"

class Games extends Component {
	render() {
		return (
			<div>
				<header>
					<Logo />
					<BackArrow />
				</header>
				<main>
					<Link to="/games/guess-the-breed">Guess the breed</Link>
					<Link to="games/guess-the-picture">Guess the picture</Link>
					<Link to="">Guess both</Link>
				</main>
			</div>
		);
	}
}

export default Games;
