import axios from "../../axios";
import TYPES from "../reducers/types";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get("/product/");
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
