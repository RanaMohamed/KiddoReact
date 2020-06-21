import TYPES from "./types";

const initialState = {
  user: null,
  profile: null,
  token: localStorage.getItem("token"),
  type: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN_USER:
    case TYPES.SIGNUP_KID: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        type: action.payload.type,
        errors: {},
      };
    }
    case TYPES.LOAD_USER:
      return {
        ...state,
        user: action.payload.user,
        type: action.payload.type,
        errors: {},
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        user: null,
        type: "",
        token: null,
        errors: {},
      };

    case TYPES.GET_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
      };
    case TYPES.CHANGE_NAME:
      return {
        ...state,
        user: { ...state.user, name: action.payload },
      };
    case TYPES.GET_SUPPORTERS_CATEGORY:
      return {
        ...state,
        user: { ...state.user, id: action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
