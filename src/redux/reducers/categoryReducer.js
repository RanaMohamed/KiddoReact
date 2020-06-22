import TYPES from "./types";

const initialState = {
	categories: [],
	selectedCategory: [],
};
const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		//GET
		case TYPES.GET_CATEGORIES_SUCCESS:
			return {
				...state,
				categories: action.payload.categories,
			};
		case TYPES.SELECT_CATEGORY:
			const selected = action.payload.deselect
				? state.selectedCategory.filter((cat) => cat !== action.payload.id)
				: action.payload.multi
				? [...state.selectedCategory, action.payload.id]
				: [action.payload.id];
			return {
				...state,
				selectedCategory: selected,
			};
		case TYPES.CLEAR_SELECT_CATEGORY:
			return {
				...state,
				selectedCategory: [],
			};
		default:
			return state;
	}
};

export default categoryReducer;
