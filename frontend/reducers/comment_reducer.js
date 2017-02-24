import {RECEIVE_COMMENTS,
        RECEIVE_COMMENT,
        REMOVE_COMMENT,
        RECEIVE_ERRORS
      } from '../actions/comment_actions';

import {merge} from 'lodash';

const initialState = {
  comments: {},
  errors: []
};

const CommentReducer = (state=initialState, action) => {
  Object.freeze(state);

  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {comments: action.comments};
    case RECEIVE_COMMENT:
      newState.comments[action.comment.id] = action.comment;
      newState.errors = [];
      return newState;
    case REMOVE_COMMENT:
      delete newState.comments[action.comment.id];
      return newState;
    case RECEIVE_ERRORS:
      const newErrState = merge({}, state);
      newErrState.errors = action.errorsObj;
      return newErrState;
    default:
      return state;
  }
};

export default CommentReducer;
