import * as types from '../types/userTypes';

export default function userReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_USER_DATA_LOGIN_LOADING:
    case types.GET_ALL_USER_PORTFOLIO_LOADING:
    case types.GET_USER_DATA_AUTH_LOADING:
    case types.LOGOUT_USER_LOADING: {
      const newState = { ...state };
      newState.loading = true;
      return newState;
    }

    case types.GET_USER_DATA_LOGIN_SUCCESS:
    case types.GET_USER_DATA_AUTH_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userData = { ...payload };
      return newState;
    }

    // обработка ошибка при получении авторизации и удалении картинки
    case types.GET_USER_DATA_LOGIN_ERROR:
    case types.DELETE_USER_PORTFOLIO_IMG_ERROR:
    case types.GET_USER_DATA_AUTH_ERROR:
    case types.LOGOUT_USER_ERROR: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = payload;
      return newState;
    }

    // добавляем картинку в портфолио
    case types.ADD_USER_PORTFOLIO_IMG_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.userPortfolio = [...newState.userPortfolio, ...payload];
      return newState;
    }

    // получаем все картинки из портфолио юзера
    case types.GET_ALL_USER_PORTFOLIO_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userPortfolio = payload;
      return newState;
    }

    // удаляем картинку из портфолио
    case types.DELETE_USER_PORTFOLIO_IMG_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userPortfolio = newState.userPortfolio.filter((img) => img.id !== payload);
      return newState;
    }

    // logout user
    case types.LOGOUT_USER_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userData = {};
      newState.userPortfolio = [];
      return newState;
    }

    default: {
      return state;
    }
  }
}
