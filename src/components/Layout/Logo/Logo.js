import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import DogLogo from '../../../images/dog.png';

class Logo extends Component {
	render() {
		return <img className="logo" src={DogLogo} alt="Doggos" />;
	}
}

export default Logo;
