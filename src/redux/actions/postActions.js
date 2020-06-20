import axios from "../../axios";
import TYPES from "../reducers/types";

export const addPost = post => {
  return async dispatch => {
    dispatch({ type: TYPES.ADD_POST });
    try {
      const data = await axios.post("post/", post);
      dispatch({
        type: TYPES.ADD_POST_SUCCESS,
        payload: data.post
      });
    } catch (errors) {
      dispatch({
        type: TYPES.ADD_POST_ERROR,
        payload: errors
      });
    }
  };
};
