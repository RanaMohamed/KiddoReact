import TYPES from '../reducers/types';

export const startRequest = () => {
	return (dispatch) => {
		dispatch({
			type: TYPES.START_REQUEST,
		});
	};
};

export const finishRequest = () => {
	return (dispatch) => {
		dispatch({
			type: TYPES.FINISH_REQUEST,
		});
	};
};
