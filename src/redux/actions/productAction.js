import axios from "../../axios";
import TYPES from "../reducers/types";

export const getProduct = (products) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.GET_PRODUCT_SUCCESS });
    try {
      const data = await axios.get("product/", products);
      dispatch({
        type: TYPES.ADD_POST_SUCCESS,
        payload: data.products,
      });
    } catch (errors) {
      dispatch({
        type: TYPES.GET_PRODUCT_FAILURE,
        payload: errors,
      });
    }
  };
};
