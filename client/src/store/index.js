import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// начальное состояние стора
const initialState = {
  user: {
    loading: false,
    error: null,
    userData: {},
    userPortfolio: [],
  },
};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
