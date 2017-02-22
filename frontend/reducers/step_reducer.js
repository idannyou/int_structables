import {RECEIVE_STEPS,
        RECEIVE_STEP,
        REMOVE_STEP,
        RECEIVE_ERRORS
      } from '../actions/step_actions';

import {merge} from 'lodash';

const StepReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STEPS:
      return action.steps;
    case RECEIVE_STEP:
      return merge({}, state, {
        [action.step.id]: action.step,
        errors:[]
      });

    case REMOVE_STEP:
      const newState = merge({}, state);
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
