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
      return {
        ...state,
        selectedCategory: [action.payload.id],
      };
    default:
      return state;
  }
};

export default categoryReducer;
