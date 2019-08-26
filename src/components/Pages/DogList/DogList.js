import React, { Component } from 'react';
import { Link } from "react-router-dom"

import Logo from "../../Layout/Logo/Logo"
import BackArrow from "../../Layout/BackArrow/BackArrow"

class DogList extends Component {
	render() {
		return (
			<div>
				<header>
					<Logo />
					<BackArrow />
				</header>
				<main>
                    <Link to="/dog-list/labrador">Dog detail</Link>
				</main>
			</div>
		);
	}
}

export default DogList;
