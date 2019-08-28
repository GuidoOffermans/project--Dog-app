import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './games.css';

import Logo from '../../Layout/Logo/Logo';
import BackArrow from '../../Layout/BackArrow/BackArrow';

class Games extends Component {
	render() {
		return (
			<div id="games">
				<header>
					<BackArrow />
					<Logo />
				</header>
				<main>
					<Link className="link" to="/games/play">
						Guess the breed
					</Link>
					<Link className="link" to="games/play">
						Guess the picture
					</Link>
					<Link className="link" to="/games/play">
						Guess both
					</Link>
				</main>
			</div>
		);
	}
}

export default Games;
