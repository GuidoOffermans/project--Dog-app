import { combineReducers } from "redux";
import dogList from "./dogListReducer";
import dogImages from "./imagesReducer";
import score from "./scoreReducer";

export default combineReducers({
  dogList,
  dogImages,
  score
});
