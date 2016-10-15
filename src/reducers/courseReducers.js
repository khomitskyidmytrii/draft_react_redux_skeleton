import * as actions from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case actions.LOAD_COURSES_SUCCESS:
      return action.courses;
    case actions.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    case actions.CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
