import { connect } from 'react-redux';
import ConceptShow from './concept_show';
import { fetchConcept,
        updateConcept,
        deleteConcept } from '../../actions/concept_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    concept: state.concepts[ownProps.params.conceptId],
    currentUser: (state.session.currentUser)? state.session.currentUser.username : null
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchConcept: (id) => dispatch(fetchConcept(id)),
    updateConcept: (concept) => dispatch(updateConcept(concept)),
    deleteConcept: (id) => dispatch(deleteConcept(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConceptShow);
