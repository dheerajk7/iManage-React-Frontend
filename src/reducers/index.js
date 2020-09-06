import { combineReducers } from "redux";
import alert from "./alert";
import progress from "./progress";
import user from "./user";

// exporting one reducer combining different reducers
export default combineReducers({ alert, progress, user });
