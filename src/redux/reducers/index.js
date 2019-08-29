import { combineReducers } from "redux";
import dogList from "./dogListReducer";
import dogImages from "./imagesReducer";
import score from "./scoreReducer";
import game from "./gameReducer";
import hint from "./showHintReducer";

export default combineReducers({
  dogList,
  dogImages,
  score,
  game,
  hint
});
