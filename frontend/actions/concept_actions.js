import * as ApiUtil from '../util/concept_api_util';
export const RECEIVE_CONCEPTS = 'RECEIVE_CONCEPTS';
export const RECEIVE_CONCEPT = 'RECEIVE_CONCEPT';
export const REMOVE_CONCEPT = 'REMOVE_CONCEPT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveConcepts = (concepts) => {
  return {
    type: RECEIVE_CONCEPTS,
    concepts
  };
};

export const receiveConcept = (concept) => {
  return {
    type: RECEIVE_CONCEPT,
    concept
  };
};

export const removeConcept = (concept) => {
  return {
    type: REMOVE_CONCEPT,
    concept
  };
};

export const receiveErrors = (errorsArray) => {
  return {
    type: RECEIVE_ERRORS,
    errorsArray
  };
};

export const fetchConcepts = () => (dispatch) => {
  return ApiUtil.fetchConcepts().then(
    (concepts) => dispatch(receiveConcepts(concepts))
  );
};

export const fetchConcept = (id) => (dispatch) => {
  return ApiUtil.fetchConcept(id).then(
    (concept) => dispatch(receiveConcept(concept))
  );
};

export const createConcept = (concept) => (dispatch) => {
  return ApiUtil.createConcept(concept).then(
    (concept) => dispatch(receiveConcept(concept))
  );
};

export const updateConcept = (concept) => (dispatch) => {
  return ApiUtil.updateConcept(concept).then(
    (concept) => dispatch(receiveConcept(concept))
  );
};

export const deleteConcept = (id) => (dispatch) => {
  return ApiUtil.deleteConcept(id).then(
    (concept) => dispatch(removeConcept(concept))
  );
};
