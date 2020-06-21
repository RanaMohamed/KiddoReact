import axios from "../../axios";
import TYPES from "../reducers/types";

export const getProducts = (page, size) => {
	return async (dispatch) => {
		try {
			const data = await axios.get("/product", {
				params: { pageNum: page, size },
			});
			dispatch({
				type: TYPES.GET_PRODUCT_SUCCESS,
				payload: {
					products: data.products,
					totalNum: data.totalNumOfProducts,
				},
			});
		} catch (errors) {
			dispatch({
				type: TYPES.GET_PRODUCT_FAILURE,
				payload: errors,
			});
		}
	};
};

export const searchProduct = (searchText) => {
	return async (dispatch) => {
		try {
			const data = await axios.get(`product?searchText=${searchText}`);
			dispatch({
				type: TYPES.SEARCH_PRODUCT_SUCCESS,
				payload: {
					products: data.products,
					totalNum: data.totalNumOfProducts,
				},
			});
		} catch (errors) {
			dispatch({
				type: TYPES.ADD_POST_ERROR,
				payload: errors,
			});
		}
	};
};

export const rateProduct = (id, value, text) => {
	return async (dispatch) => {
		try {
			const data = await axios.post(`product/rate/${id}`, { value, text });
			dispatch({
				type: TYPES.RATE_PRODUCT_SUCCESS,
				payload: {
					feedback: data.feedback,
					productId: id,
				},
			});
		} catch (errors) {
			console.log(errors);
			return errors;
		}
	};
};

export const getBoughtProducts = (id, page, size) => {
	return async (dispatch) => {
		try {
			const data = await axios.get(`buyer/products/${id}`, {
				params: { pageNum: page, size },
			});
			dispatch({
				type: TYPES.GET_PRODUCT_SUCCESS,
				payload: {
					products: data.products,
					totalNum: data.totalNumOfProducts,
				},
			});
		} catch (errors) {
			console.log(errors);
			return errors;
		}
	};
};
