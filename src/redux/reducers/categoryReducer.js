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
    default:
      return state;
  }
};

export default categoryReducer;
