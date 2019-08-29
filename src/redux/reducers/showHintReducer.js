import { SHOW_HINT } from "../actions/hintAction";

export default (state = false, action = {}) => {
  switch (action.type) {
    case SHOW_HINT:
      return action.payload;
    default:
      return state;
  }
};
