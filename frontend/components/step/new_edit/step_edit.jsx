import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import stickykit from 'sticky-kit/dist/sticky-kit';
import ImagesContainer from '../images/images_container';

class StepEdit extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.step;
    this.update = this.update.bind(this);
    this.submitStep = this.submitStep.bind(this);
  }

  componentDidMount(){
      this.props.fetchStep(this.props.params.stepId);
  }

  componentWillReceiveProps(newProps){
      this.setState(newProps.step);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  submitStep(){
    this.props.updateStep(this.state);
  }

  render(){
    if(!this.state) return null;
    return (
      <div>
        <div id='concept-edit-container'>
          <div id='concept-edit'>
            <ImagesContainer params={this.props.params}
                            submitStep = {this.submitStep}
                            handlePublish = {this.handlePublish}/>
            <div id='concept-edit-body'>
              <input type='text' id='concept-edit-body-title'
                value= {this.state.title}
                onChange={this.update('title')}
                placeholder={(this.props.errors && this.props.errors['title'])? `Title ${this.props.errors['title']}`:'Title'}
                />
              <div id='concept-edit-body-buttons'>
              </div>

              <textarea id='concept-edit-body-description'
                value={this.state.body}
                onChange={this.update('body')}
                placeholder= {(this.props.errors && this.props.errors['body']) ? `Step ${this.props.errors['body']}`:'Step'}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default StepEdit;
