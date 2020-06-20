import { combineReducers } from 'redux';
import userReducer from './userReducer';
import requestReducer from './requestReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
	request: requestReducer,
  user: userReducer,
  post: postReducer
});

export default rootReducer;
