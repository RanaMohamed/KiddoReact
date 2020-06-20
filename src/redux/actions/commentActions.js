import axios from '../../axios';
import TYPES from '../reducers/types';

export const getComments = (id) => {
	return async (dispatch) => {
		try {
			const data = await axios.get(`/comment/${id}/2`);
			dispatch({
				type: TYPES.GET_COMMENTS,
				payload: { comments: data },
			});
		} catch (errors) {
			return errors;
		}
	};
};
