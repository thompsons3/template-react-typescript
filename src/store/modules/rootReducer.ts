import { combineReducers } from "redux";

//REDUCERS
import { exemploReducer } from "./exemplo/reducer";
import { authReducer } from "./auth/reducer";

export default combineReducers({
  exemplo: exemploReducer,
  auth: authReducer
});