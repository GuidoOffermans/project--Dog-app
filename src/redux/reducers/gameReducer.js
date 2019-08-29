import {
  SET_CHUNKED_DOGS,
  SET_CURRENT_BREED,
  SET_GAME_TYPE,
  SET_NEXT_QUESTION
} from "../actions/gameActions";

const initialState = {
  chunkedDogs: [],
  currentBreed: "",
  gameType: "",
  onToNextQuestion: false
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
    default:
      return state;
  }
};
