import axios from '../../axios';
import TYPES from '../reducers/types';

export const getProducts = (page, size) => {
	return async (dispatch) => {
		try {
			const data = await axios.get('/product', {
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
