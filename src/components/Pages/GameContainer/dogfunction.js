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

let index = 0;
let nextDog = '';

const selectNext = (chunkedDogsArray, fiveInARow) => {
	if (index < chunkedDogsArray.length - 1) {
		index += 1;
		nextDog = chunkedDogsArray[index];
	} else {
		index = 0;
		nextDog = chunkedDogsArray[0];
	}
	return nextDog;
};
module.exports = { chunkify, shuffleArray, selectNext };
