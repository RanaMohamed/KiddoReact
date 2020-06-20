import TYPES from "./types";

const initialState = {
  categories: [],
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET
    case TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
      };
    //ADD
    case TYPES.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        post: action.payload.post,
        errors: {},
      };
    case TYPES.ADD_CATEGORY_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
