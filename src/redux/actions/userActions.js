import TYPES from "../reducers/types";
import axios from "../../axios";

const signup = (type, user) => async dispatch => {
  try {
    const data = await axios.post(`/${type}/register`, user);
    axios.defaults.headers.common["authorization"] = data.token;
    dispatch({
      type: TYPES.SIGNUP_KID,
      payload: { user: data[type], token: data.token }
    });
  } catch (errors) {
    return errors;
  }
};

const login = (type, user) => async dispatch => {
  try {
    const data = await axios.post(`/${type}/login`, user);
    axios.defaults.headers.common["authorization"] = data.token;
    dispatch({
      type: TYPES.LOGIN_USER,
      payload: { user: data.user, token: data.token, type: data.type }
    });
  } catch (errors) {
    console.log(errors);
    return errors;
  }
};

const getProfile = (type, id) => async dispatch => {
  try {
    const data = await axios.get(`/${type}/${id}`);
    dispatch({
      type: TYPES.GET_PROFILE,
      payload: { profile: data.user }
    });
  } catch (errors) {
    console.log(errors);
    return errors;
  }
};

export const signupKid = user => {
  return signup("kid", user);
};

export const loginKid = user => {
  return loginKid("kid", user);
};

export const signupSupporter = user => {
  return signup("supporter", user);
};

export const loginSupporter = user => {
  return login("supporter", user);
};

export const signupBuyer = user => {
  return signup("buyer", user);
};

export const loginBuyer = user => {
  return login("buyer", user);
};

export const getKidProfile = id => {
  return getProfile("kid", id);
};

export const getSupporterProfile = id => {
  return getProfile("Supporter", id);
};

export const getBuyerProfile = id => {
  return getProfile("buyer", id);
};

export const changeNameAction = name => {
  return async dispatch => {
    // const data = await axios.get('')
    dispatch({
      type: TYPES.CHANGE_NAME,
      payload: name
    });
  };
};
