import { combineReducers } from "redux";
import userReducer from "./userReducer";
import requestReducer from "./requestReducer";
import postReducer from "./postReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  request: requestReducer,
  user: userReducer,
  post: postReducer,
  product: productReducer,
});

export default rootReducer;
