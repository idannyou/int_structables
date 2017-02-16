import { connect } from 'react-redux';
import ConceptIndex from './concept_index';
import { fetchConcepts, fetchConcept,
        createConcept, updateConcept,
        deleteConcept } from '../../actions/concept_actions';

const mapStateToProps = (state) => {
  return {
    concepts: Object.keys(state.concepts).map(
      (id) => {
        return state.concepts[id];
      }
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchConcepts: () => dispatch(fetchConcepts()),
    fetchConcept: (id) => dispatch(fetchConcept()),
    createConcept: (concept) => dispatch(createConcept(concept)),
    updateConcept: (concept) => dispatch(updateConcept(concept)),
    deleteConcept: (id) => dispatch(deleteConcept(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConceptIndex);
