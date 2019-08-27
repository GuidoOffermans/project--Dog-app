import { SET_DOGS } from "../actions/dogListActions";

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_DOGS:
      return action.payload;
    default:
      return state;
  }
};
