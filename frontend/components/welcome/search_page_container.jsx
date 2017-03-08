import {connect} from 'react-redux';
import {
        fetchSpecificConcepts
      } from '../../actions/concept_actions';
import SearchPage from './search_page';

const mapStateToProps = (state, newProps) => {
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
    fetchSpecificConcepts: (title) => dispatch(fetchSpecificConcepts(title))
  };
};

export default connect(mapStateToProps,
                      mapDispatchToProps)
                      (SearchPage);
