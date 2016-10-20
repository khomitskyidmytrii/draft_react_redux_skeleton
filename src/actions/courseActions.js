import * as actions from './actionTypes';
import courseApi from '../api/mockCourse';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadCoursesSuccess(courses) {
  return { type: actions.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        dispatch(ajaxCallError(err));
        throw(error);
      });
  };
}

export function updateCoursesSuccess(course) {
  return {type: actions.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course) {
  return {type: actions.CREATE_COURSE_SUCCESS, course};
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(savedCourse => {
        course.id ? dispatch(updateCoursesSuccess(savedCourse)) :
          dispatch(createCourseSuccess(savedCourse));
      })
      .catch(err => {
        dispatch(ajaxCallError(err));
        throw(err);
      });
  };
}
