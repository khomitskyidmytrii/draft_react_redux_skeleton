import {combineReducers} from 'redux';
import courses from './courseReducers';
import authors from './authorReducers';
import ajaxCalls from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCalls
});

export default rootReducer;
