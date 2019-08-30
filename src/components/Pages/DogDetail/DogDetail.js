import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DogDetail.css';
import wiki from 'wikijs';

import Logo from '../../Layout/Logo/Logo';
import BackArrow from '../../Layout/BackArrow/BackArrow';
import HomeButton from '../../Layout/HomeButton/HomeButton';

import { getImages } from '../../../redux/actions/imagesAction';

class DogDetail extends Component {
	state = { dogInfo: [] };
	componentDidMount() {
		const breed = this.props.match.params.breed;
		this.props.getImages(breed);

		wiki().page(breed).then((page) => page.content()).then((content) => {
			const history = content.find(
				(catagory) => catagory.title === 'History'
			);
			if (history && !'') {
				console.log(history);
				this.setState({ dogInfo: history.content.split('\n') });
			} else {
				this.setState({
					dogInfo: [
						`Wikipedia has no history on : ${this.props.match.params.breed
							.charAt(0)
							.toUpperCase() +
							this.props.match.params.breed.slice(1)}`
					]
				});
			}
		});
	}

	render() {
		return (
			<div>
				<header>
					<Logo />
					<BackArrow />
					<HomeButton />
				</header>
				<main id="dog-detail">
					<div className="header">
						{this.props.match.params.breed.charAt(0).toUpperCase() +
							this.props.match.params.breed.slice(1)}
					</div>
					<div className="dogHistory">
						{this.state.dogInfo.map((line) => <p>{line}</p>)}
					</div>
					<div className="dogImages">
						{this.props.images.map(
							(image, index) =>
								index < 10 ? (
									<img key={index} src={image} alt="dog" />
								) : (
									false
								)
						)}
					</div>
				</main>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		images: state.dogImages
	};
};

export default connect(mapStateToProps, { getImages })(DogDetail);
