import TYPES from "./types";

const initialState = {
  products: [],
  totalNum: 0,
  product: null,
  errors: {},
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET
    case TYPES.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        totalNum: action.payload.totalNumOfProducts,
      };

    case TYPES.GET_PRODUCT_FAILURE:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
