import { authUserAPI, securityAPI } from "../api/auth-user-api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET-CAPTCHA-URL-SUCCESS";

// INITIAL STATE
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

// REDUCERS
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// ACTION CREATORS
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

// THUNK CREATORS
export const getAuthUserData = () => {
  return (dispatch) => {
    return authUserAPI.authUser().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const login = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    authUserAPI.login(email, password, rememberMe, captcha).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        dispatch(getCaptchaUrl());

        let message = data.messages.length > 0 ? data.messages[0] : "Any error";
        let action = stopSubmit("login", { _error: message });
        dispatch(action);
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authUserAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
