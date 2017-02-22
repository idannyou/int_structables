import { connect } from 'react-redux';
import StepNewEdit from './step_new_edit';
import {fetchSteps,
        fetchStep,
        createStep,
        updateStep,
        deleteStep
      } from '../../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
  let step, errors;
  let initial = {body:'', order:''};
  if (state.concepts.errors){
    errors = state.concepts.errors;
  } else {
    errors = null ;
  }
  if (ownProps.params){
    steps = state.steps;
    step = initial;
  }
  return {step, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchSteps: () => dispatch(fetchSteps()),
    fetchStep: (id) => dispatch(fetchStep(id)),
    createStep: (step, conceptId) => dispatch(createStep(id, conceptId)),
    updateStep: (step) => dispatch(updateStep(step)),
    deleteStep: (id) => dispatch(deleteStep(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(StepNewEdit);
