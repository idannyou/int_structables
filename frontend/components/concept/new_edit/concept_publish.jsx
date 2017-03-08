import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import { connect } from 'react-redux';
import ConceptEdit from './concept_edit';
import {fetchConcept,
        updateConcept} from '../../../actions/concept_actions';
import {createCategory,
        deleteCategory} from '../../../actions/category_actions';

class ConceptPublish extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.concept;
    this.update = this.update.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.handleCategories = this.handleCategories.bind(this);
    this.handleCatClick = this.handleCatClick.bind(this);
    this.checkCheck = this.checkCheck.bind(this);
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

  handleCatClick(category){
    let boolean = $(`#${category}`)[0].checked;
    if(boolean){
      this.props.createCategory({concept_id: this.state.id, category});
    } else {
      this.props.deleteCategory(this.props.categories_concepts[category]);
    }
  }

  checkCheck(category){
    let keyArray = Object.keys(this.state.categories);
    for (var i = 0; i < keyArray.length; i++) {
      if(this.state.categories[i].name === category){
        return true;
      }
    }
    return false;
  }

  handleCategories(){
    return(
      <div>
        <label htmlFor='Derivative'>
          Derivatives
        </label>
        <input type='checkbox' id= 'Derivative' checked={this.checkCheck('Derivative')}
          onChange = {() => this.handleCatClick('Derivative')}
          />
          <label htmlFor='Integral'>
            Integrals
          </label>
        <input type='checkbox' id= 'Integral' checked={this.checkCheck('Integral')}
          onChange = {() => this.handleCatClick('Integral')}
          />
          <label htmlFor='Limits'>
            Limits
          </label>
        <input type='checkbox' id= 'Limit' checked={this.checkCheck('Limit')}
          onChange = {() => this.handleCatClick('Limit')}
          />
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
    let categories = {};
    let categories_concepts = {};
    let keyArray = Object.keys(concept.categories);
    for (var i = 0; i < keyArray.length; i++) {
      categories[concept.categories[i].name] = concept.categories[i].id;
      categories_concepts[concept.categories[i].name] = concept.categories_concepts[i].id;
    }

  return {concept, categories, categories_concepts, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchConcept: (id) => dispatch(fetchConcept(id)),
    updateConcept: (concept) => dispatch(updateConcept(concept)),
    createCategory: (category) => dispatch(createCategory(category)),
    deleteCategory: (id) => dispatch(deleteCategory(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConceptPublish);
