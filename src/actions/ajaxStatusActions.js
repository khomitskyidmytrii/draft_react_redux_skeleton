import * as actions from './actionTypes';

export function beginAjaxCall() {
  return {type: actions.BEGIN_AJAX_CALL};
}

export function ajaxCallError() {
  return {type: actions.AJAX_CALL_ERROR};
}
