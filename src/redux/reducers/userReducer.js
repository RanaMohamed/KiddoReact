import TYPES from "./types";
import { act } from "react-dom/test-utils";

const initialState = {
	user: null,
	profile: null,
	token: localStorage.getItem("token"),
	type: "",
	supporters: [], //Basant to get category supporters
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
				supporters: action.payload.supporters,
			};
		case TYPES.FOLLOW_CATEGORY: {
			const user = {
				...state.user,
				categories: [state.user.categories, action.payload.category],
			};
			return {
				...state,
				user: user,
			};
		}
		case TYPES.UNFOLLOW_CATEGORY: {
			const user = {
				...state.user,
				categories: state.user.categories.filter(
					(cat) => cat !== action.payload.category
				),
			};
			return {
				...state,
				user: user,
			};
		}
		default:
			return state;
	}
};

export default userReducer;
