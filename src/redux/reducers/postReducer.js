import TYPES from './types';

const initialState = {
	posts: [],
	totalNum: 0,
	currentPage: 1,
	post: null,
	perPage: 6,
	errors: {},
};
const postReducer = (state = initialState, action) => {
	switch (action.type) {
		//GET
		case TYPES.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload.posts,
				totalNum: action.payload.total,
			};
		//ADD
		case TYPES.ADD_POST_SUCCESS:
			return {
				...state,
				post: action.payload.post,
				errors: {},
			};
		case TYPES.ADD_POST_ERROR:
			return {
				...state,
				errors: action.payload,
			};
		case TYPES.CHANGE_PAGE_POST:
			return {
				...state,
				currentPage: action.payload.page,
			};
		case TYPES.ADD_COMMENT:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === action.payload.postId
						? {
								...post,
								comments: [action.payload.comment, ...post.comments].slice(
									0,
									2
								),
								commentsTotal: post.commentsTotal + 1,
						  }
						: post
				),
			};
		default:
			return state;
	}
};

export default postReducer;
