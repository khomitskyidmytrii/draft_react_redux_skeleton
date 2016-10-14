import * as actions from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case actions.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
};
