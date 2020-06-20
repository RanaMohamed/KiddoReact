import TYPES from '../reducers/types';
import axios from '../../axios';

export const loginUser = (user) => {
	return async (dispatch) => {
		dispatch({ type: TYPES.LOGIN_USER_REQUEST });
		try {
			const data = await axios.post('/users/login', user);
			axios.defaults.headers.common['authorization'] = data.token;
			dispatch({
				type: TYPES.LOGIN_USER_SUCCESS,
				payload: { user: data.user, token: data.token },
			});
		} catch (errors) {
			dispatch({
				type: TYPES.LOGIN_USER_FAILURE,
				payload: errors,
			});
		}
	};
};

export const changeNameAction = (name) => {
	return async (dispatch) => {
		// const data = await axios.get('')
		dispatch({
			type: TYPES.CHANGE_NAME,
			payload: name,
		});
	};
};
