import * as types from '../types/userTypes';

export const addDescriptionLoading = () => ({
  type: types.ADD_DESCRIPTION_LOADING,
});

export const addDescriptionError = (payload) => ({
  type: types.ADD_DESCRIPTION_ERROR,
  payload,
});

export const addDescriptionSuccess = (payload) => ({
  type: types.ADD_DESCRIPTION_SUCCESS,
  payload,
});

// saga
export const addDescriptionSaga = (payload) => ({
  type: types.ADD_DESCRIPTION_SAGA_SUCCESS,
  payload,
});
