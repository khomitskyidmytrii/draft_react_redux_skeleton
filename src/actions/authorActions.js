import * as actions from './actionTypes';
import authorApi from '../api/mockAuthor';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {type: actions.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw(error);
      });
  };
}
