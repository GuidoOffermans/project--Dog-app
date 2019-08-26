import React, { Component } from 'react';
import { Link } from "react-router-dom"

import Logo from "../../Layout/Logo/Logo"
import BackArrow from "../../Layout/BackArrow/BackArrow"

class DogDetail extends Component {
	render() {
		return (
			<div>
				<header>
					<Logo />
					<BackArrow />
				</header>
				<main>
                    dog details
				</main>
			</div>
		);
	}
}

export default DogDetail;
