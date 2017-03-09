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
    this.state = this.props.concept;
    this.update = this.update.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.submitConcept = this.submitConcept.bind(this);
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
    let url = `concepts/${this.state.id}/edit/publish`;
    hashHistory.push(url);
  }

  submitConcept(){
    this.props.updateConcept(this.state);
  }

  render(){
    if(!this.state) return null;
    return (
      <div>
        <div id='concept-edit-container'>
          <div id='concept-edit'>
            <ImagesContainer params={this.props.params}
                            publish = {this.state.publish}
                            submitConcept = {this.submitConcept}
                            handlePublish = {this.handlePublish}
                            handleDelete = {() => this.props.deleteConcept(this.props.concept.id)}/>
            <div id='concept-edit-body'>
              <input type='text' id='concept-edit-body-title'
                value= {this.state.title}
                onChange={this.update('title')}
                placeholder={(this.props.errors && this.props.errors['title'])? `Title ${this.props.errors['title']}`:'Title'}
                />

              <textarea id='concept-edit-body-description'
                value={this.state.description}
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
