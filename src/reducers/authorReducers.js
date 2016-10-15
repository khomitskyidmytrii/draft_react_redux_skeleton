import * as actions from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch(action.type) {
    case actions.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
