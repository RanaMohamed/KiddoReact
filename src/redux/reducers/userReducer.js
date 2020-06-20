import TYPES from './types';

const initialState = {
	user: null,
	token: '',
};
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.LOGIN_USER:
		case TYPES.SIGNUP_KID: {
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				errors: {},
			};
		}
		case TYPES.CHANGE_NAME:
			return {
				...state,
				user: { ...state.user, name: action.payload },
			};
		default:
			return state;
	}
};

export default userReducer;
