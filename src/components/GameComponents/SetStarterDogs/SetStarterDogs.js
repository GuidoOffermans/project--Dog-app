import React from 'react';
import { connect } from 'react-redux';

// import { getDogs } from '../../../redux/actions/dogListActions';

function shuffleArray(array) {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function chunkify(arr) {
	const chunkSize = 3;
	let temporal = [];

	for (let i = 0; i < arr.length; i += chunkSize) {
		temporal.push(arr.slice(i, i + chunkSize));
	}

	return temporal;
}

function SetStarterDogs(props) {
	console.log('props.dogs', props.dogs);

	const chunkedDogs = chunkify(shuffleArray(props.dogs));

	return (
		<div>
			{/* {chunkedDogs.map((chunk) => (
				<ul key={chunk}>
					{chunk.map((chunkItem) => (
						<li key={chunkItem}>{chunkItem}</li>
					))}
				</ul>
			))} */}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		dogs: state.dogList
	};
};

export default connect(mapStateToProps)(SetStarterDogs);
