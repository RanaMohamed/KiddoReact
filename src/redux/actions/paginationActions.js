import TYPES from '../reducers/types';

export const changePage = (reducer, page) => {
	return async (dispatch) => {
		dispatch({
			type: TYPES['CHANGE_PAGE_' + reducer.toUpperCase()],
			payload: { page },
		});
	};
};
