import {RECEIVE_CONCEPTS,
        RECEIVE_CONCEPT,
        REMOVE_CONCEPT,
        RECEIVE_ERRORS
        } from '../actions/concept_actions'

import {merge} from 'lodash';

const ConceptReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CONCEPTS:
      return merge({}, state, {
        concepts: action.concepts,
        errors:[]
      });

    case RECEIVE_CONCEPT:
      return merge({}, state, {
        concept: action.concept,
        errors:[]
      });

    case REMOVE_CONCEPT:
      const newState = merge({}, state);
      delete newState[action.concept.id];
      return newState;

    case RECEIVE_ERRORS:
      const newState1 = merge({}, oldState);
      newState1.errors = action.errorsArray;
      return newState1;

    default:
      return state;
  }
}
