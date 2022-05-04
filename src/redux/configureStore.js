import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const configureStore = (initialReduxState = {}) => {
  const middleware = [thunk];
  return createStore(
    rootReducer,
    initialReduxState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
};
export default configureStore;