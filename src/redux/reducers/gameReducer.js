import { SET_CHUNKED_DOGS, SET_CURRENT_BREED } from '../actions/gameActions';

const initialState = {
  chunkedDogs: [],
  currentBreed: ''
}

export default (state = initialState, action = {}) => {
  console.log('action:', action)
	switch (action.type) {
		case SET_CHUNKED_DOGS:
      return {
        ...state, chunkedDogs : action.payload
      }
		case SET_CURRENT_BREED:
			return {...state, currentBreed: action.payload}
		default:
			return state;
	}
};
