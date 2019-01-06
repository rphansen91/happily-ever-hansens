import { combineReducers } from "redux";
import { menu } from "./menu";
import { invitation } from "./invitation";

export default combineReducers({
  menu,
  invitation
});
