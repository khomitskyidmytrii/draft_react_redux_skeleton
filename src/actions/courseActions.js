import * as actions from './actionTypes';

export function createCourse(course) {
  return { type: actions.CREATE_COURSE, course}
}
