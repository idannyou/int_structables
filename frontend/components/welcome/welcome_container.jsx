import {connect} from 'react-redux';
import { login,
         logout,
        signup
      } from '../../actions/session_actions';
import {
        fetchSpecificConcepts
      } from '../../actions/concept_actions';
import Welcome from './welcome';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user)),
    fetchSpecificConcepts: (search) => dispatch(fetchSpecificConcepts(search))
  };
};

export default connect(mapStateToProps,
                      mapDispatchToProps)
                      (Welcome);
