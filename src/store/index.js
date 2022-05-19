import {  createStore ,   applyMiddleware } from 'redux';
import counterReducer from '../Reducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const middlewares = [thunk];
const configureStore = () => {
  const store = createStore(counterReducer , 
    composeWithDevTools(applyMiddleware(...middlewares))
);
  return store;
};
export default configureStore;
