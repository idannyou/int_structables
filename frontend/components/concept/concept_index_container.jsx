import { connect } from 'react-redux';
import ConceptIndex from './concept_index';
import { fetchConcepts } from '../../actions/concept_actions';

const mapStateToProps = (state) => {
  if(!state.concepts.concepts) return {concepts: null};
  return {
    concepts: Object.keys(state.concepts.concepts).map(
      (id) => {
        return state.concepts.concepts[id];
      }
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchConcepts: () => dispatch(fetchConcepts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConceptIndex);
