import axios from "../../axios";
import TYPES from "../reducers/types";

export const addPost = (post) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.ADD_POST });
    try {
      const data = await axios.post("post/", post);
      dispatch({
        type: TYPES.ADD_POST_SUCCESS,
        payload: data.post,
      });
    } catch (errors) {
      dispatch({
        type: TYPES.ADD_POST_ERROR,
        payload: errors,
      });
    }
  };
};

export const getKidPosts = (id, page, size) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`/post/kid/${id}`, {
        params: { pageNum: page, size },
      });
      dispatch({
        type: TYPES.GET_POSTS_SUCCESS,
        payload: { posts: data.kidPosts, total: data.totalNumOfPosts },
      });
    } catch (errors) {
      console.log(errors);
      return errors;
    }
  };
};

export const getUnapprovedPosts = (page, size) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`/posts/unapproved/`, {
        params: { pageNum: page, size },
      });
      dispatch({
        type: TYPES.GET_POSTS_SUCCESS,
        payload: { posts: data.Posts, total: data.totalNumOfPosts },
      });
    } catch (errors) {
      console.log(errors);
      return errors;
    }
  };
};

export const getApprovedPosts = (page, size) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`/posts/approved/`, {
        params: { pageNum: page, size },
      });
      dispatch({
        type: TYPES.GET_POSTS_SUCCESS,
        payload: { posts: data.Posts, total: data.totalNumOfPosts },
      });
    } catch (errors) {
      console.log(errors);
      return errors;
    }
  };
};
