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
      const data = await axios.get(`product?searchText=${searchText}/`);
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

export const rateProduct = (id, value) => {
  return async (dispatch) => {
    try {
      const data = await axios.post(`product/rate/${id}`, { value });
      dispatch({
        type: TYPES.RATE_PRODUCT_SUCCESS,
        payload: {
          value: data.feedbacks[0].value,
          feedback: data.feedbacks[0].text,
        },
      });
    } catch (errors) {
      console.log(errors);
      return errors;
    }
  };
};
