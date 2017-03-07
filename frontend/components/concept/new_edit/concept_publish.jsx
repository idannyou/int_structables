import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import { connect } from 'react-redux';
import ConceptEdit from './concept_edit';
import {fetchConcept,
        updateConcept} from '../../../actions/concept_actions';

class ConceptPublish extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.concept;
    this.update = this.update.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.handleCategories = this.handleCategories.bind(this);
  }

  componentDidMount(){
      this.props.fetchConcept(this.props.params.conceptId);
  }

  componentWillReceiveProps(newProps){
      this.setState(newProps.concept);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handlePublish(){
    if(this.state.publish === false){
      this.setState({publish: true}, () => this.props.updateConcept(this.state));
    } else {
      this.setState({publish: false}, () => this.props.updateConcept(this.state));
    }

  }

  publishOrNot(){
    return (this.state.publish===false) ?
      <button id='concept-edit-save'
              onClick={this.handlePublish}>
        Publish Now
      </button> :
      <button id='concept-edit-save'
              onClick={this.handlePublish}>
        UnPublish
      </button> ;
  }

  handleCategories(){
    return(
      <div>
        <label htmlFor='Derivative'>
          Derivative
        </label>
        <input type='checkbox' id= 'Derivative'/>
          <label htmlFor='Integral'>
            Integral
          </label>
        <input type='checkbox' id= 'Integral'/>
          <label htmlFor='Limits'>
            Limits
          </label>
        <input type='checkbox' id= 'Limits'/>
      </div>
    );
  }

  render(){
    return (
      <div>
        <div id='concept-show-concept'>
          <img src={this.state.images_url[0]} />
        </div>
        <div >
          Title
          <input type='text' id='concept-edit-body-title'
            value= {this.state.title}
            onChange={this.update('title')}
            placeholder={(this.props.errors && this.props.errors['title'])? `Title ${this.props.errors['title']}`:'Title'}
            />
          {this.publishOrNot()}
        </div>
        <div>
          Category
          {this.handleCategories()}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  let concept, errors;
  if (state.concepts.errors){
    errors = state.concepts.errors;
  } else {
    errors = null ;
  }
    concept = state.concepts.concepts[ownProps.params.conceptId];
  return {concept, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchConcept: (id) => dispatch(fetchConcept(id)),
    updateConcept: (concept) => dispatch(updateConcept(concept))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConceptPublish);
