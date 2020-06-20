import { combineReducers } from 'redux';
import userReducer from './userReducer';
import requestReducer from './requestReducer';

const rootReducer = combineReducers({
	request: requestReducer,
	user: userReducer,
});

export default rootReducer;
