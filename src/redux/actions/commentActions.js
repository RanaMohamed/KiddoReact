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

export const addComment = (postId, comment) => {
	return async (dispatch) => {
		try {
			const data = await axios.post(`/comment/${postId}`, { text: comment });
			dispatch({
				type: TYPES.ADD_COMMENT,
				payload: { comment: data.comment, postId },
			});
		} catch (errors) {
			return errors;
		}
	};
};
