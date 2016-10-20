import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

export default function configureStore(initialstate) {
  return createStore(
    rootReducer,
    initialstate,
    applyMiddleware(thunk)
  );
}
