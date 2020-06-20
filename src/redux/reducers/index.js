import { combineReducers } from "redux";
import userReducer from "./userReducer";
import requestReducer from "./requestReducer";
import postReducer from "./postReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  request: requestReducer,
  user: userReducer,
  post: postReducer,
  categories: categoryReducer,
});

export default rootReducer;
