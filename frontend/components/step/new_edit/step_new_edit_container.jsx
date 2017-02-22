import { connect } from 'react-redux';
import StepNewEdit from './step_new_edit';

const mapStateToProps = (state, ownProps) => {
  let step, errors;
  let initial = {body:'', order:''};
  // if (state.concepts.errors){
  //   errors = state.concepts.errors;
  // } else {
  //   errors = null ;
  // }`````
  if (ownProps.params){
    step = state.steps[ownProps.params.stepId];
  }else{
    step = initial;
  }
  return {step, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // let action;
  // if(ownProps.params.conceptId){
  //   action = updateConcept;
  // } else {
  //   action = createConcept;
  // }
  // return {
  //   fetchConcept: (id) => dispatch(fetchConcept(id)),
  //   action: (concept) => dispatch(action(concept)),
  //   deleteConcept: (id) => dispatch(deleteConcept(id)),
  //   updateConcept: (concept) => dispatch(updateConcept(concept))
  // };
};


export default connect(null, null)(StepNewEdit);
