import TYPES from './types';

const initialState = {
	pending: false,
};
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.START_REQUEST:
			return {
				...state,
				pending: true,
			};
		case TYPES.FINISH_REQUEST:
			return {
				...state,
				pending: false,
			};
		default:
			return state;
	}
};

export default userReducer;
