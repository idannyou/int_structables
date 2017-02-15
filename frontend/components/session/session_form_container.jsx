import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return{
    login: (user) => (dispatch(login(user))),
    signup: (user) => (dispatch(signup(user))),
    clearError: (array) => (dispatch(receiveErrors(array)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
