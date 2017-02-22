import { connect } from 'react-redux';
import ConceptNew from './concept_new';
import {createConcept} from '../../../actions/concept_actions';


const mapStateToProps = (state, ownProps) => {
  let concept, errors;
  let initial = {title:'', description:'', images:{}, images_url:[],
  publish: false, user_id:'', username:'', concepts:[], id:'', modalOpen: true};
  if (state.concepts.errors){
    errors = state.concepts.errors;
  } else {
    errors = null ;
  }

  concept = initial;

  return {concept, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createConcept: (concept) => dispatch(createConcept(concept))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConceptNew);
