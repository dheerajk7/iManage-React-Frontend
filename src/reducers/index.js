import { combineReducers } from "redux";
import alert from "./alert";
import progress from "./progress";

// exporting one reducer combining different reducers
export default combineReducers({ alert, progress });
