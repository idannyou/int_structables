import {RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS
      } from '../actions/session_actions';

import {merge} from 'lodash';
// window.merge = merge;


const initialState = {
  currentUser: null,
  errors: []
};


const SessionReducer = (oldState = initialState, action) => {
  // if (typeof oldState == 'undefined') {
  //   oldState = initialState
  // }
  Object.freeze(oldState);

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {
        currentUser: action.currentUser,
        errors: []
      });

    case RECEIVE_ERRORS:
      const newState = merge({}, oldState);
      newState.errors = action.errorsArray;
      return newState;
      // return merge({}, oldState, {
      //   currentUser: null,
      //   errors: action.errorsArray
      // });

    default:
      return oldState;
  }
};

export default SessionReducer;
