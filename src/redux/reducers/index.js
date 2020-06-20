import { combineReducers } from 'redux';
import userReducer from './userReducer';
import requestReducer from './requestReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
	request: requestReducer,
	user: userReducer,
	post: postReducer,
	comment: commentReducer,
});

export default rootReducer;
