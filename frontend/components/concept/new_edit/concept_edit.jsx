import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import stickykit from 'sticky-kit/dist/sticky-kit';
import ImagesContainer from '../images/images_container';
import StepNewEditContainer from '../../step/new_edit/step_new_edit_container';

class ConceptNewEdit extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      concept: this.props.concept,
      deleteState: false
    };
    this.update = this.update.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.submitConcept = this.submitConcept.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onNotDelete = this.onNotDelete.bind(this);
  }

  componentDidMount(){
      this.props.fetchConcept(this.props.params.conceptId);
  }

  componentWillReceiveProps(newProps){
      this.setState({concept: newProps.concept, deleteState: false});
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handlePublish(){
    let url = `concepts/${this.state.concept.id}/edit/publish`;
    hashHistory.push(url);
  }

  handleDelete(){
    this.setState({deleteState: true}, ()=>{
    });
  }

  onDelete(){
    this.props.deleteConcept(this.props.concept.id);
    hashHistory.push(`concepts/user/${this.props.concept.user_id}`);
  }

  onNotDelete(){
    this.setState({deleteState: false}, ()=>{
    });
  }

  deleteBox(){
    if (this.state.deleteState === true){
      return(
        <div>
          Delete?
          <button onClick={this.onDelete}>
            Yes
          </button>
          <button onClick={this.onNotDelete}>
            No
          </button>
        </div>
      );
    }
  }

  submitConcept(){
    this.props.updateConcept(this.state.concept);
  }

  render(){
    if(!this.state.concept) return null;
    return (
      <div>
        <div id='concept-edit-container'>
          <div id='concept-edit'>
            <ImagesContainer params={this.props.params}
                            publish = {this.state.concept.publish}
                            submitConcept = {this.submitConcept}
                            handlePublish = {this.handlePublish}
                            handleDelete = {this.handleDelete}
                            />
                          {this.deleteBox()}
            <div id='concept-edit-body'>
              <input type='text' id='concept-edit-body-title'
                value= {this.state.concept.title}
                onChange={this.update('title')}
                placeholder={(this.props.errors && this.props.errors['title'])? `Title ${this.props.errors['title']}`:'Title'}
                />

              <textarea id='concept-edit-body-description'
                value={this.state.concept.description}
                onChange={this.update('description')}
                placeholder= {(this.props.errors && this.props.errors['description']) ? `Description ${this.props.errors['description']}`:'Description'}
                />
            </div>
          </div>
          <StepNewEditContainer conceptId={this.props.concept.id}
                                />
        </div>
      </div>
    );
  }

}

export default ConceptNewEdit;
