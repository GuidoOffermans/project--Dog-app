import React, { Component } from 'react';
import * as request from 'superagent';

class DogPicture extends Component {
	state = { src: '', breed: '' };

	getImage = () => {
		this.setState({ breed: this.props.breed });

		request(
			'https://dog.ceo/api/breed/' + this.props.breed + '/images/random'
		).then((response) => {
			console.log('response', response);
			this.setState({ src: response.body.message });
		});
	};

	render() {
		if (this.props.breed !== this.state.breed) {
			this.getImage();

			return 'Loading picture...';
		}

		return this.state.src !== '' ? (
			<img src={this.state.src} alt={this.props.breed} />
		) : (
			'Loading picture...'
		);
	}
}

export default DogPicture;
