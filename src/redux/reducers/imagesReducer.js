import { SET_IMAGES } from "../actions/imagesAction";

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_IMAGES:
      return action.payload;
    default:
      return state;
  }
};
