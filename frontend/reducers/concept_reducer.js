import {RECEIVE_CONCEPTS,
        RECEIVE_CONCEPT,
        REMOVE_CONCEPT,
        RECEIVE_ERRORS
      } from '../actions/concept_actions';

import {merge} from 'lodash';

const initialState = {
  concepts: {},
  errors: []
};

const ConceptReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {

    case RECEIVE_CONCEPTS:
      return {concepts: action.concepts};
    case RECEIVE_CONCEPT:
        newState.concepts[action.concept.id]= action.concept;
        newState.errors = [];
        return newState;
    case REMOVE_CONCEPT:
      delete newState.concepts[action.concept.id];
      return newState;

    case RECEIVE_ERRORS:
      const newErrState = merge({}, state);
      newErrState.errors = action.errorsObj;
      return newErrState;

    default:
      return state;
  }
};

export default ConceptReducer;
