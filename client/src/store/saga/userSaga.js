import {
  call, put, takeLatest, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../types/userTypes';
import * as actions from '../actions/userActionSaga';

function* addDesctiptionUser(action) {
  const { payload } = action;
  // вкл загрузку
  yield put(actions.addDescriptionLoading());
  try {
    yield delay(10000);
    const addDescriptionData = yield call(
      axios.post,
      `http://localhost:5000/api/users/new/descriptions/${payload.userId}`,
      { description: payload.dataValue },
    );
    yield put(actions.addDescriptionSuccess(addDescriptionData.data));
  } catch (error) {
    yield put(actions.addDescriptionError(error));
  }
}

// saga watcher
export default function* userSaga() {
  yield takeLatest(types.ADD_DESCRIPTION_SAGA_SUCCESS, addDesctiptionUser);
}
