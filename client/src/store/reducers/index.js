import { combineReducers } from 'redux';
import userReducer from './userReducer';

const reducersSpec = {
  user: userReducer,
};

const rootReducer = combineReducers(reducersSpec);
export default rootReducer;
