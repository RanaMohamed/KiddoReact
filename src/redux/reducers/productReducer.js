import TYPES from './types';

const initialState = {
	products: [],
	totalNum: 0,
	currentPage: 1,
	perPage: 6,
	errors: {},
};
const productReducer = (state = initialState, action) => {
	switch (action.type) {
		//GET
		case TYPES.GET_PRODUCT_SUCCESS:
			return {
				...state,
				products: action.payload.products,
				totalNum: action.payload.totalNum,
			};

		case TYPES.GET_PRODUCT_FAILURE:
			return {
				...state,
				errors: action.payload,
			};
		case TYPES.CHANGE_PAGE_PRODUCT:
			return {
				...state,
				currentPage: action.payload.page,
			};
		default:
			return state;
	}
};

export default productReducer;
