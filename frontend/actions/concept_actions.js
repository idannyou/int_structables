import * as ConceptApiUtil from '../util/concept_api_util';
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

export const receiveErrors = (errorsObj) => {
  return {
    type: RECEIVE_ERRORS,
    errorsObj
  };
};

export const fetchConcepts = () => (dispatch) => {
  return ConceptApiUtil.fetchConcepts().then(
    (concepts) => dispatch(receiveConcepts(concepts))
  );
};

export const fetchConcept = (id) => (dispatch) => {
  return ConceptApiUtil.fetchConcept(id).then(
    (concept) => dispatch(receiveConcept(concept))
  );
};

export const createConcept = (concept) => (dispatch) => {
  return ConceptApiUtil.createConcept(concept).then(
    (concept) => dispatch(receiveConcept(concept)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateConcept = (concept, id) => (dispatch) => {
  return ConceptApiUtil.updateConcept(concept, id).then(
    (concept) => dispatch(receiveConcept(concept)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteConcept = (id) => (dispatch) => {
  return ConceptApiUtil.deleteConcept(id).then(
    (concept) => {
      dispatch(removeConcept(concept));
      return concept;
    }
  );
};

export const fetchSpecificConcepts = (search) => dispatch => (
  ConceptApiUtil.fetchSpecificConcepts(search).then(
    concepts => dispatch(receiveConcepts(concepts))
  )
);
