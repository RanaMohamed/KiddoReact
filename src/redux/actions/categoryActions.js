import axios from "../../axios";
import TYPES from "../reducers/types";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      // dispatch({ type: TYPES.GET_CATEGORIES });
      const data = await axios.get("/categories");
      dispatch({
        type: TYPES.GET_CATEGORIES_SUCCESS,
        payload: { categories: data.categories },
      });
      console.log(data.categories);
    } catch (errors) {
      dispatch({
        type: TYPES.GET_CATEGORIES_ERROR,
      });
    }
  };
};
