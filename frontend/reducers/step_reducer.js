import {RECEIVE_STEPS,
        RECEIVE_STEP,
        REMOVE_STEP,
        RECEIVE_ERRORS
      } from '../actions/step_actions';

import {merge} from 'lodash';

const initialState = {
  steps: {},
  errors: []
};

const StepReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({},state);
  switch (action.type) {
    case RECEIVE_STEPS:
      return {steps: action.steps};
    case RECEIVE_STEP:
      newState.steps[action.step.id]= action.step;
      return newState;
    case REMOVE_STEP:
      delete newState[action.step.id];
      return newState;

    case RECEIVE_ERRORS:
      const newErrState = merge({}, state);
      newErrState.errors = action.errorsObj;
      return newErrState;

    default:
      return state;
  }
};

export default StepReducer;
