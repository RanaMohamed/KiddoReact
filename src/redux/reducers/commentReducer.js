import TYPES from './types';

const initialState = {
	comments: [],
	totalNum: 0,
};
const commentReducer = (state = initialState, action) => {
	switch (action.type) {
		//GET
		case TYPES.GET_COMMENTS:
			return {
				...state,
				comments: action.payload.comments,
				totalNum: action.payload.total,
			};
		default:
			return state;
	}
};

export default commentReducer;
