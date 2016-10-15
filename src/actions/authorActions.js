import * as actions from './actionTypes';
import authorApi from '../api/mockAuthor';

export function loadAuthorsSuccess(authors) {
  return {type: actions.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch => {
    return authorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw(error);
      });
  };
}
