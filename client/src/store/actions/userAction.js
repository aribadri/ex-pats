import axios from 'axios';
import * as types from '../types/userTypes';

// login user ----------
export const loginUserLoading = () => ({
  type: types.GET_USER_DATA_LOGIN_LOADING,
});

export const loginUserSuccess = (payload) => ({
  type: types.GET_USER_DATA_LOGIN_SUCCESS,
  payload,
});

export const loginUserError = (payload) => ({
  type: types.GET_USER_DATA_LOGIN_ERROR,
  payload,
});
// login user ---------

// ------ auth user -------
export const authUserError = (payload) => ({
  type: types.GET_USER_DATA_AUTH_ERROR,
  payload,
});

export const authUserLoading = () => ({
  type: types.GET_USER_DATA_AUTH_LOADING,
});

export const authUserSuccess = (payload) => ({
  type: types.GET_USER_DATA_AUTH_SUCCESS,
  payload,
});

// auth user thunk
export const authUserThunk = (payload) => async (dispatch, getState) => {
  dispatch(authUserLoading());
  axios.get('http://localhost:5000/api/me', { withCredentials: true })
    .then((res) => res.data)
    .then((loggedUserData) => dispatch(authUserSuccess(loggedUserData)))
    .catch((error) => dispatch(authUserError(error)));
};
// ------ auth user -------

// добавляем картинку в портфолио
export const addPortfolioImgSuccess = (payload) => ({
  type: types.ADD_USER_PORTFOLIO_IMG_SUCCESS,
  payload,
});

// -----------
// загружаем все картинки в портфолио, при заходе на страницу
export const getAllPortfolioLoading = () => ({
  type: types.GET_ALL_USER_PORTFOLIO_LOADING,
});

export const getAllPortfolioSuccess = (payload) => ({
  type: types.GET_ALL_USER_PORTFOLIO_SUCCESS,
  payload,
});

export const getAllPortfolioError = (payload) => ({
  type: types.DELETE_USER_PORTFOLIO_IMG_ERROR,
  payload,
});

// thunk для getAllPortfolioSuccess
export const getAllPortfolioThunk = (payload) => async (dispatch, getState) => {
  dispatch(getAllPortfolioLoading());
  axios.get(`http://localhost:5000/api/portfolio/${payload}`, { withCredentials: true })
    .then((res) => res.data)
    .then((portfolioData) => dispatch(getAllPortfolioSuccess(portfolioData)))
    .catch((error) => dispatch(getAllPortfolioError(error)));
};
// загружаем все картинки в портфолио, при заходе на страницу
// -----------

// удаляем картинку из портфолио
export const deleteImgPortfolioSuccess = (payload) => ({
  type: types.DELETE_USER_PORTFOLIO_IMG_SUCCESS,
  payload,
});

// logout user ========
export const logoutUserLoading = () => ({
  type: types.LOGOUT_USER_LOADING,
});

export const logoutUserError = (payload) => ({
  type: types.LOGOUT_USER_ERROR,
  payload,
});

export const logoutUserSuccess = () => ({
  type: types.LOGOUT_USER_SUCCESS,
});

// logout user thunk
export const logoutUserThunk = (payload) => async (dispatch, getState) => {
  dispatch(logoutUserLoading());

  const headers = {
    'Content-Type': 'application/json',
  };

  axios.get('http://localhost:5000/api/logout', { headers, withCredentials: true })
    .then((res) => res.data)
    .then((logout) => {
      dispatch(logoutUserSuccess());
    })
    .catch((error) => dispatch(logoutUserError(error)));
};
// logout user ========
