import { connect } from 'react-redux';
import ConceptNewEdit from './concept_new_edit';
import {fetchConcept,
        createConcept,
        updateConcept,
        deleteConcept} from '../../../actions/concept_actions';


const mapStateToProps = (state, ownProps) => {
  let concept;
  let initial = {title:'', description:''};
  if (ownProps.params.conceptId){
    concept = state.concepts[ownProps.params.conceptId];
  }else{
    concept = initial;
  }
  return {concept};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if(ownProps.params.conceptId){
    action = updateConcept;
  } else {
    action = createConcept;
  }
  return {
    fetchConcept: (id) => dispatch(fetchConcept(id)),
    action: (concept) => dispatch(action(concept)),
    deleteConcept: (id) => dispatch(deleteConcept(id)),
    updateConcept: (concept) => dispatch(updateConcept(concept))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConceptNewEdit);
