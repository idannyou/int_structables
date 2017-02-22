import * as StepApiUtil from '../util/step_api_util';
export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveSteps = (steps) => {
  return {
    type: RECEIVE_STEPS,
    steps
  };
};

export const receiveStep = (step) => {
  return {
    type: RECEIVE_STEP,
    step
  };
};

export const removeStep = (step) => {
  return {
    type: REMOVE_STEP,
    step
  };
};

export const receiveErrors = (errorsObj) => {
  return {
    type: RECEIVE_ERRORS,
    errorsObj
  };
};

export const fetchSteps = () => (dispatch) => {
  return StepApiUtil.fetchSteps().then(
    (steps) => dispatch(receiveSteps(steps))
  );
};

export const fetchStep = (id) => (dispatch) => {
  return StepApiUtil.fetchStep(id).then(
    (step) => dispatch(receiveStep(step))
  );
};

export const createStep = (step) => (dispatch) => {
  return StepApiUtil.createStep(step).then(
    (step) => dispatch(receiveStep(step)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateStep = (step, id) => (dispatch) => {
  return StepApiUtil.updateStep(step, id).then(
    (step) => dispatch(receiveStep(step))
  );
};

export const deleteStep = (id) => (dispatch) => {
  return StepApiUtil.deleteStep(id).then(
    (step) => dispatch(removeStep(step))
  );
};
