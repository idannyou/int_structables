import { connect } from 'react-redux';
import ConceptEdit from './concept_edit';
import {fetchConcept,
        updateConcept,
        deleteConcept} from '../../../actions/concept_actions';


const mapStateToProps = (state, ownProps) => {
  let concept, errors;
  if (state.concepts.errors){
    errors = state.concepts.errors;
  } else {
    errors = null ;
  }
    concept = state.concepts[ownProps.params.conceptId];
  return {concept, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchConcept: (id) => dispatch(fetchConcept(id)),
    deleteConcept: (id) => dispatch(deleteConcept(id)),
    updateConcept: (concept) => dispatch(updateConcept(concept))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConceptEdit);
