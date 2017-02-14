import * as ApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errorsArray) => {
  return {
    type: RECEIVE_ERRORS,
    errorsArray
  };
};

export const login = (user) => (dispatch) => {
  return (ApiUtil.newSession(user)).then(
    (user) => {
      return dispatch(receiveCurrentUser(user));
    },
    (err) => {
      return dispatch(receiveErrors(err.responseJSON));
    }
  );
};

export const logout = () => (dispatch) => {
  return (ApiUtil.deleteSession()).then(
    () => {
      return dispatch(receiveCurrentUser(null));
    }
  );
};

export const signup = (user) => (dispatch) => {
  return (ApiUtil.createUser(user)).then(
    (user) => {
      return dispatch(receiveCurrentUser(user));
    },
    (err) => {
      return dispatch(receiveErrors(err.responseJSON));
    }
  );
};
