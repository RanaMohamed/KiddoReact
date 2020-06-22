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
			console.log(data.categories);
		} catch (errors) {
			dispatch({
				type: TYPES.GET_CATEGORIES_ERROR,
			});
		}
	};
};

export const selectCategory = (id) => {
	return (dispatch) => {
		dispatch({
			type: TYPES.SELECT_CATEGORY,
			payload: { id },
		});
	};
};

export const followCategory = (id) => {
	return async (dispatch) => {
		try {
			await axios.post(`/kid/followCategory/${id}`);
			dispatch({
				type: TYPES.FOLLOW_CATEGORY,
				payload: { category: id },
			});
		} catch (errors) {
			return errors;
		}
	};
};

export const unfollowCategory = (id) => {
	return async (dispatch) => {
		try {
			await axios.post(`/kid/unfollowCategory/${id}`);
			dispatch({
				type: TYPES.UNFOLLOW_CATEGORY,
				payload: { category: id },
			});
		} catch (errors) {
			return errors;
		}
	};
};
