import { GET_SCORE } from "../actions/scoreAction";

export default (state = [], action = {}) => {
  switch (action.type) {
    case GET_SCORE:
      return action.payload;
    default:
      return state;
  }
};
