import TYPES from '../reducers/types';
import axios from '../../axios';

export const signupKid = (user) => {
	return async (dispatch) => {
		try {
			const data = await axios.post('/kid/register', user);
			console.log(data);
			axios.defaults.headers.common['authorization'] = data.token;
			dispatch({
				type: TYPES.SIGNUP_KID,
				payload: { user: data.kid, token: data.token },
			});
		} catch (errors) {
			return errors;
		}
	};
};

export const loginUser = (user) => {
	return async (dispatch) => {
		try {
			const data = await axios.post('/users/login', user);
			axios.defaults.headers.common['authorization'] = data.token;
			dispatch({
				type: TYPES.LOGIN_USER,
				payload: { user: data.user, token: data.token },
			});
		} catch (errors) {
			return errors;
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
