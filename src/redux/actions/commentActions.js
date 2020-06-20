import axios from '../../axios';
import TYPES from '../reducers/types';

export const getComments = (id) => {
	return async (dispatch) => {
		try {
			const data = await axios.get(`/comment/${id}/2`);
			console.log(data);
			dispatch({
				type: TYPES.GET_COMMENTS,
				payload: { comments: data },
			});
		} catch (errors) {
			console.log(errors);
			return errors;
		}
	};
};
