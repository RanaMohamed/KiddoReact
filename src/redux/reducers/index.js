import { combineReducers } from 'redux';
import userReducer from './userReducer';
import requestReducer from './requestReducer';
import postReducer from './postReducer';
import productReducer from './productReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
	request: requestReducer,
	user: userReducer,
	post: postReducer,
	product: productReducer,
	comment: commentReducer,
});

export default rootReducer;
