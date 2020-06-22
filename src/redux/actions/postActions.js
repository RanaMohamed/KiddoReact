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
			return errors;
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
			const data = await axios.get(`/posts/unapproved`, {
				params: { pageNum: page, size },
			});
			dispatch({
				type: TYPES.GET_POSTS_SUCCESS,
				payload: { posts: data.posts, total: data.totalNumOfPosts },
			});
		} catch (errors) {
			console.log(errors);
			return errors;
		}
	};
};

export const getApprovedPosts = (page, size, category) => {
	return async (dispatch) => {
		try {
			const data = await axios.get(`/posts/approved`, {
				params: { pageNum: page, size, category },
			});
			dispatch({
				type: TYPES.GET_POSTS_SUCCESS,
				payload: { posts: data.posts, total: data.totalNumOfPosts },
			});
		} catch (errors) {
			console.log(errors);
			return errors;
		}
	};
};

export const search = (page, size) => {
	return async (dispatch) => {
		try {
			const data = await axios.get(`/posts/approved`, {
				params: { pageNum: page, size },
			});
			dispatch({
				type: TYPES.GET_POSTS_SUCCESS,
				payload: { posts: data.posts, total: data.totalNumOfPosts },
			});
		} catch (errors) {
			console.log(errors);
			return errors;
		}
	};
};

export const getPostById = (postId) => {
	return async (dispatch) => {
		try {
			const data = await axios.get(`/post/${postId}`);
			dispatch({
				type: TYPES.GET_POST_SUCCESS,
				payload: { post: data.post },
			});
		} catch (errors) {
			return errors;
		}
	};
};

export const addLike = (postId) => {
	return async (dispatch) => {
		try {
			const data = await axios.post(`/post/like/${postId}`);
			dispatch({
				type: TYPES.ADD_LIKE,
				payload: { like: data.like, postId },
			});
		} catch (errors) {
			return errors;
		}
	};
};

export const removeLike = (postId) => {
	return async (dispatch) => {
		try {
			const data = await axios.post(`/post/unlike/${postId}`);
			dispatch({
				type: TYPES.REMOVE_LIKE,
				payload: { like: data.like, postId },
			});
		} catch (errors) {
			return errors;
		}
	};
};

export const approvePost = (postId) => {
	return async (dispatch) => {
		try {
			const data = await axios.post(`/supporter/approvePost/${postId}`);
			dispatch({
				type: TYPES.APPROVE_POST,
				payload: { post: data.post },
			});
		} catch (errors) {
			return errors;
		}
	};
};
