import { combineReducers } from "redux";
import userReducer from "./userReducer";
import requestReducer from "./requestReducer";
import postReducer from "./postReducer";
import productReducer from "./productReducer";
import commentReducer from "./commentReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  request: requestReducer,
  user: userReducer,
  post: postReducer,
  categories: categoryReducer,
  product: productReducer,
  comment: commentReducer,
});

export default rootReducer;
