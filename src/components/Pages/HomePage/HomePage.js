import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './homepage.css'

import Logo from "../../Layout/Logo/Logo"

class HomePage extends Component {
	render() {
		return (
			<div id='homepage'>
				<header>
					<Logo />
				</header>
				<main >
					<Link className='link' to="/games">Games</Link>
					<Link className='link' to="/dog-list">List of dogs</Link>
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
