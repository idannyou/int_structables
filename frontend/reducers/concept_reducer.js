import {RECEIVE_CONCEPTS,
        RECEIVE_CONCEPT,
        REMOVE_CONCEPT,
        RECEIVE_ERRORS
      } from '../actions/concept_actions';

import {RECEIVE_CATEGORY,
        REMOVE_CATEGORY
      } from '../actions/category_actions';

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

    case RECEIVE_CATEGORY:
    debugger
      newState.concepts[action.categories_concept.concept_id].categories_concepts[action.categories_concept.id]= action.categories_concept;
      return newState;

    case REMOVE_CATEGORY:
    debugger
      delete newState.categories_concept[action.categories_concept.id];
      return newState;


    default:
      return state;
  }
};

export default ConceptReducer;
