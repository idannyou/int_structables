import {connect} from 'react-redux';
import {
        fetchConcepts
      } from '../../actions/concept_actions';
import SearchPage from './search_page';

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
    fetchConcepts: () => dispatch(fetchConcepts())
  };
};

export default connect(mapStateToProps,
                      mapDispatchToProps)
                      (SearchPage);
