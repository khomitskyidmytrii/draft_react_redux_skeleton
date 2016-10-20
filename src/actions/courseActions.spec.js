import expect from 'expect';
import * as courseActions from './courseActions';
import * as actions from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
  describe('loadCoursesSuccess', () => {
    it('should create a LOAD_COURSES_SUCCESS action', () => {
      const courses = [
        {id: 'clean-code', title: 'Clean Code'},
        {id: 'rapid-es6', title: 'Rapid ES6'}
      ];

      const expectedAction = {
        type: actions.LOAD_COURSES_SUCCESS,
        courses
      };

      const action = courseActions.loadCoursesSuccess(courses);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: actions.CREATE_COURSE_SUCCESS,
        course
      };

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it(`should create ${actions.BEGIN_AJAX_CALL} and
                    ${actions.LOAD_COURSES_SUCCESS} when
                    loading courses`,(done) => {
    // nock('http://example.com')
    //   .get('/courses')
    //   .reply(200, {body:{courses: [
    //     {id: 1, firstName: 'Cory', lastName: 'House'}
    //   ]}});

    const expectedActions = [
      {type: actions.BEGIN_AJAX_CALL},
      {
        type: actions.LOAD_COURSES_SUCCESS,
        body: {
          courses: [
            {id: 'clean-code', lastName: 'Clean Code'}
          ]
        }
      }
    ];
    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses())
      .then(() => {
        const acts = store.getActions();
        expect(acts[0].type).toEqual(actions.BEGIN_AJAX_CALL);
        expect(acts[1].type).toEqual(actions.LOAD_COURSES_SUCCESS);
        done();
      });
  });
});
