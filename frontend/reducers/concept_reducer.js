import {RECEIVE_CONCEPTS,
        RECEIVE_CONCEPT,
        REMOVE_CONCEPT,
        RECEIVE_ERRORS
      } from '../actions/concept_actions';

import {merge} from 'lodash';

const ConceptReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CONCEPTS:
      return action.concepts;
    case RECEIVE_CONCEPT:
      return merge({}, state, {
        [action.concept.id]: action.concept,
        errors:[]
      });

    case REMOVE_CONCEPT:
      const newState = merge({}, state);
      delete newState[action.concept.id];
      return newState;

    default:
      return state;
  }
};

export default ConceptReducer;
