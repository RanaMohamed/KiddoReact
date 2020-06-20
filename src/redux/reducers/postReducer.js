import TYPES from "./types";

const initialState = {
  posts: [],
  totalNum: 0,
  post: null,
  errors: {}
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET
    case TYPES.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        totalNum: action.payload.total
      };
    //ADD
    case TYPES.ADD_POST_SUCCESS:
      return {
        ...state,
        post: action.payload.post,
        errors: {}
      };
    case TYPES.ADD_POST_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
