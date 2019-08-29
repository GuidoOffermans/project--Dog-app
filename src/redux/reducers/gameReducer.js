import {
	SET_CHUNKED_DOGS,
	SET_CURRENT_BREED,
	SET_GAME_TYPE,
	SET_NEXT_QUESTION,
	ADD_NEXT_CHUNK
} from '../actions/gameActions';

const initialState = {
	chunkedDogs: [],
	currentBreed: '',
	gameType: '',
	onToNextQuestion: false,
	currentDogpool: []
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_CHUNKED_DOGS:
			return {
				...state,
				chunkedDogs: action.payload
			};
		case SET_CURRENT_BREED:
			return { ...state, currentBreed: action.payload };
		case SET_GAME_TYPE:
			return { ...state, gameType: action.payload };
		case SET_NEXT_QUESTION:
			return { ...state, onToNextQuestion: action.payload };
		case ADD_NEXT_CHUNK:
      const currentDogpool = [...state.currentDogpool, ...state.chunkedDogs[0]]
      const chunkedDogs = state.chunkedDogs.slice(1, state.chunkedDogs.length)
      return {
        ...state,
        chunkedDogs,
        currentDogpool
      }
		default:
			return state;
	}
};
