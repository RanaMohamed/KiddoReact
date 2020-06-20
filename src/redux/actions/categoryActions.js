import axios from "../../axios";
import TYPES from "../reducers/types";

export const addPost = (categories) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.GET_CATEGORIES });
    const data = await axios.post("categories", categories);
    dispatch({
      type: TYPES.GET_CATEGORIES,
      payload: data.categories,
    });
  };
};
