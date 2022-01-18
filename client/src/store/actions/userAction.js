import axios from 'axios';
import * as types from '../types/userTypes';

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

// export const logoutUser = () => ({
//   type: LOGOUT_USER,
// });

// export const authUser = (payload) => ({
//   type: AUTH_USER,
//   payload,
// });

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
