import axios from "../../axios";
import TYPES from "../reducers/types";
//import { convertToFormData } from '../../helpers/helper';
import store from "../store";

export const addPost = post => {
  return async dispatch => {
    const postData = convertToFormData(post);
    dispatch({ type: TYPES.ADD_POST });
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}post/`,
        postData
      );
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
