import * as types from '../types/userTypes';

export default function userReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USER_DATA_LOGIN_LOADING:
    case types.GET_ALL_USER_PORTFOLIO_LOADING:
    case types.GET_USER_DATA_AUTH_LOADING:
    case types.STATUS_SERVICE_CHANGE_LOADING:
    case types.ADD_DESCRIPTION_LOADING:
    case types.DELETE_CONTACT_LOADING:
    case types.REG_USER_LOADING:
    case types.ADD_CONTACT_LOADING:
    case types.LOGOUT_USER_LOADING: {
      const newState = { ...state };
      newState.loading = true;
      return newState;
    }

    case types.REG_USER_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userData = { ...payload };
      newState.userContacts = [...newState.userContacts];
      return newState;
    }

    case types.GET_USER_DATA_LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userData = { ...payload.user };
      newState.userContacts = [...payload.userContactData];
      return newState;
    }

    //  авторизация
    case types.GET_USER_DATA_AUTH_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userData = { ...payload.userDto };
      newState.userContacts = [...newState.userContacts, ...payload.userContactData];
      return newState;
    }

    // обработка ошибки
    case types.GET_USER_DATA_LOGIN_ERROR:
    case types.DELETE_CONTACT_ERROR:
    case types.DELETE_USER_PORTFOLIO_IMG_ERROR:
    case types.GET_USER_DATA_AUTH_ERROR:
    case types.STATUS_SERVICE_CHANGE_ERROR:
    case types.ADD_DESCRIPTION_ERROR:
    case types.ADD_CONTACT_ERROR:
    case types.REG_USER_ERROR:
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
      newState.userContacts = [];
      return newState;
    }

    // обновляем status service checkbox
    case types.STATUS_SERVICE_CHANGE_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userData = { ...newState.userData, status_service: payload.status_service };
      return newState;
    }

    // обновляем user description
    case types.ADD_DESCRIPTION_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userData = { ...newState.userData, description: payload.descriptionUser };
      return newState;
    }

    // add user contact
    case types.ADD_CONTACT_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.userContacts = [...newState.userContacts, payload];
      return newState;
    }

    // delete user contact
    case types.DELETE_CONTACT_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userContacts = newState.userContacts.filter((contact) => contact.id !== payload);
      return newState;
    }

    default: {
      return state;
    }
  }
}
