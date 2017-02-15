import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = (ownProps.formType === 'old') ? login : signup;

  return{
    processForm: (user) => (dispatch(action(user)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
