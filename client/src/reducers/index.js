import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import setCycleReducer from "./setCycleReducer";
import weightReducer from "./weightReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  setCycle: setCycleReducer,
  weight: weightReducer
});
