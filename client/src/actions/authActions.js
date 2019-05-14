import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";
import { getErrors } from "./errorActions";

//Set up header
export const headers = {
  headers: {
    "Content-Type": "application/json"
  }
};

//Register user
export const register = ({ name, email, password }) => dispatch => {
  //req body we are going to send to backend via axios
  const body = JSON.stringify({ name, email, password });

  dispatch({ type: USER_LOADING });

  axios
    .post("/api/users", body, headers)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        getErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({ type: REGISTER_FAIL });
    });
};

//Login user
export const login = ({ email, password }) => dispatch => {
  //Req body going to check and send to be verified
  const body = JSON.stringify({ email, password });

  dispatch({ type: USER_LOADING });

  axios
    .post("/api/auth", body, headers)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
      dispatch({ type: LOGIN_FAIL });
    });
};

//Logout user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

//Load user - unaffected if you refresh the page (maintains state)
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

//Set up config/headers and token
export const tokenConfig = getState => {
  const token = getState().auth.token;
  //If there is a token, add it to headers
  if (token) {
    headers.headers["x-auth-token"] = token;
  }
  return headers;
};
