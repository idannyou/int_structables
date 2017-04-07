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
    this.checkCheck = this.checkCheck.bind(this);
    this.handleCatClick = this.handleCatClick.bind(this);
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
      <button id='concept-publish-save'
              onClick={this.handlePublish}>
        Publish Now
      </button> :
      <button id='concept-publish-save'
              onClick={this.handlePublish}>
        UnPublish
      </button> ;
  }

  handleCatClick(category){
    let cat_id = this.props.categories[category];
    let array = Object.assign([], this.state.category_ids);
    let index = array.indexOf(cat_id);
    if (index > -1){
      array.splice(index, 1);
    } else {
      array.push(cat_id);
    }
      this.setState({category_ids: array});
  }

  checkCheck(category){
    let cat_id = this.props.categories[category];
    let index = this.state.category_ids.indexOf(cat_id);
    if (index === -1){
      return false;
    } else {
      return true;
    }
  }

  handleCategories(){
    return(
      <div>
        <label htmlFor='Derivative' className='checkbox'>
          Derivatives
        </label>
        <input type='checkbox' id= 'Derivative' checked={this.checkCheck('Derivative')}
          onChange = {() => this.handleCatClick('Derivative')}
          />
          <label htmlFor='Integral' className='checkbox'>
            Integrals
          </label>
        <input type='checkbox' id= 'Integral' checked={this.checkCheck('Integral')}
          onChange = {() => this.handleCatClick('Integral')}
          />
          <label htmlFor='Limits' className='checkbox'>
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
      <div id='concept-publish'>
          <div id='concept-publish-item'>

              <img src={this.state.images_url[0]} id='concept-publish-img'/>

            <div id='concept-publish-text'>

              <div>
                <div id='concept-publish-title'>
                  {this.state.title}
                </div>
              </div>

              <label id='concept-publish-username'>
                by
                <a>
                  {this.state.username}
                </a>
              </label>

            </div>
          </div>
        <div className='concept-publish-edit'>
          <div className='concept-publish-category'>
            <h2>
              Category
            </h2>
            {this.handleCategories()}
          </div>

          {this.publishOrNot()}

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
    concept.allCat.forEach((category) => {
      categories[category.name] = category.id;
    });

  return {concept, categories, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchConcept: (id) => dispatch(fetchConcept(id)),
    updateConcept: (concept) => dispatch(updateConcept(concept))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConceptPublish);
