import { combineReducers } from "@reduxjs/toolkit";
import common from "./common/reducer";
import menu from "./menu/reducer";

const reducer = combineReducers({
  common,
  menu,
});

export default reducer;
