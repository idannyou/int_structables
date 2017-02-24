import { connect } from 'react-redux';
import ConceptUser from './concept_user';
import { fetchConcepts } from '../../../actions/concept_actions';

const mapStateToProps = (state) => {
  if(!state.concepts.concepts) return {concepts: null};
  return {
    concepts: Object.keys(state.concepts.concepts).map(
      (id) => {
        return state.concepts.concepts[id];
      }
    ),
    currentUsername: (state.session.currentUser)? state.session.currentUser.username : null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchConcepts: () => dispatch(fetchConcepts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConceptUser);
