import { SET_SCORE } from "../actions/scoreAction";

const initialState = {
  questionsAsked: 0,
  correctAnswers: 0,
  correctAnswersInARow: 0
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SCORE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
