import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};

export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const receiveErrors = (errorsObj) => {
  return {
    type: RECEIVE_ERRORS,
    errorsObj
  };
};

export const createComment = (comment, location) => (dispatch) =>{
  return CommentApiUtil.createComment(comment,location).then(
    (comment) => dispatch(receiveComment(comment)),
    (errors) => dispatch(receiveErrors(errors))
  );
};

export const deleteComment = (id, location) => (dispatch) => {
  CommentApiUtil.deleteComment(id, location).then(
    (comment) => dispatch(removeComment(comment))
  );
};

export const fetchComments = (location) => (dispatch) => {
  return CommentApiUtil.receiveComments(location).then(
      (comments) => dispatch(receiveComments(comments))
  );
};

export const updateComment = (comment, location, id) => (dispatch) => {
  return CommentApiUtil.updateComment(comment, location, id).then(
      (comment) => dispatch(receiveComment(comment))
  );
};
