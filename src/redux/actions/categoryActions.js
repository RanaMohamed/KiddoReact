import axios from "../../axios";
import TYPES from "../reducers/types";

export const getCategories = () => {
	return async (dispatch) => {
		try {
			const data = await axios.get("/categories");
			dispatch({
				type: TYPES.GET_CATEGORIES_SUCCESS,
				payload: { categories: data.categories },
			});
		} catch (errors) {
			dispatch({
				type: TYPES.GET_CATEGORIES_ERROR,
			});
		}
	};
};

export const selectCategory = (id, multi, deselect) => {
	return (dispatch) => {
		dispatch({
			type: TYPES.SELECT_CATEGORY,
			payload: { id, multi, deselect },
		});
	};
};

export const clearSelectCategory = () => {
	return (dispatch) => {
		dispatch({
			type: TYPES.CLEAR_SELECT_CATEGORY,
		});
	};
};

export const followCategory = (type, id) => {
	return async (dispatch) => {
		try {
			await axios.post(`/${type}/followCategory/${id}`);
			dispatch({
				type: TYPES.FOLLOW_CATEGORY,
				payload: { category: id },
			});
		} catch (errors) {
			return errors;
		}
	};
};

export const unfollowCategory = (type, id) => {
	return async (dispatch) => {
		try {
			await axios.post(`/${type}/unfollowCategory/${id}`);
			dispatch({
				type: TYPES.UNFOLLOW_CATEGORY,
				payload: { category: id },
			});
		} catch (errors) {
			return errors;
		}
	};
};
