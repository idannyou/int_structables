import {RECEIVE_COMMENTS,
        RECEIVE_COMMENT,
        REMOVE_COMMENT
      } from '../actions/comment_actions';

import {merge} from 'lodash';

const CommentReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return merge({}, state, {
        [action.comment.id]: action.comment,
        errors:[]
      });
    case REMOVE_COMMENT:
      const newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
