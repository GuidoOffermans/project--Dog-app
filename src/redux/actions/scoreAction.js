export const GET_SCORE = "GET_SCORE";
export function getScore(score) {
  return {
    type: GET_SCORE,
    payload: score
  };
}
// score should be an object with questionsAsked and correctAnswers
