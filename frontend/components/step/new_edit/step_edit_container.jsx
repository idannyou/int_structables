import { connect } from 'react-redux';
import StepNewEdit from './step_new_edit';
import {fetchSteps,
        fetchStep,
        createStep,
        updateStep,
        deleteStep
      } from '../../../actions/step_actions';
import StepEdit from './step_edit'

const mapStateToProps = (state, ownProps) => {
  return{
    step: state.steps.steps[ownProps.params.stepId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchSteps: (conceptId) => dispatch(fetchSteps(conceptId)),
    fetchStep: (id) => dispatch(fetchStep(id)),
    createStep: (step) => dispatch(createStep(step)),
    updateStep: (step) => dispatch(updateStep(step)),
    deleteStep: (id) => dispatch(deleteStep(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(StepEdit);
