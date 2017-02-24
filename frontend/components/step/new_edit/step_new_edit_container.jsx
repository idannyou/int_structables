import { connect } from 'react-redux';
import StepNewEdit from './step_new_edit';
import {fetchSteps,
        fetchStep,
        createStep,
        updateStep,
        deleteStep
      } from '../../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    steps: Object.keys(state.steps.steps).map(
      (id) => {
        return state.steps.steps[id];
      }
    ),
    conceptId: ownProps.conceptId,
    errors: state.steps.errors
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


export default connect(mapStateToProps, mapDispatchToProps)(StepNewEdit);
