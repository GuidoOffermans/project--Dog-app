
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

module.exports = {chunkify, shuffleArray}
