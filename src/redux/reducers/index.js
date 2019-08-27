import { combineReducers } from "redux";
import dogList from "./dogListReducer";
import dogImages from "./imagesReducer";

export default combineReducers({
  dogList,
  dogImages
});
