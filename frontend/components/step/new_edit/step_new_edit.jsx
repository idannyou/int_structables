import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import ImagesContainer from '../images/images_container';
import {merge} from 'lodash';


class StepNewEdit extends React.Component{

  constructor(props){
    super(props);
    this.state={
      steps: this.props.steps
    };
    this.renderSteps = this.renderSteps.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    this.props.fetchSteps({concept_id: this.props.conceptId}).then(
      action => this.setState({steps: Object.keys(action.steps).map(
        (id) => {
          return action.steps[id];
        }
      )},() => {})
    );
  }

  componentWillReceiveProps(newProps) {
    if (newProps.steps.length !== this.props.steps.length) {
      this.setState({steps: newProps.steps});
    }
  }

  renderSteps(){
    if (this.state.steps.length === 0) return null;
    return this.state.steps.map((obj, idx) => (
      <div key={obj.id} id='steps-edit-steps'>
        <h1>{`Step ${idx + 1}`}</h1>
        <input type='text'
          value={this.state.steps[idx].title}
          onChange={this.update('title', obj.id)}
          key={obj.id}
          />
        <button onClick={() => this.handleDelete(obj.id)}>Remove</button>
        <Link to={`concepts/${this.props.conceptId}/step/${obj.id}/edit`}>Edit</Link>
      </div>
    ));
  }

  handleAdd(e){
    e.preventDefault();
    this.props.createStep({title: '', body: '', order: this.props.steps.length+1, concept_id: this.props.conceptId});
  }

  handleDelete(stepId){
    this.props.deleteStep(stepId);
    return (e) => {
      e.preventDefault();
    };
  }



  update(field, id){
    return (e) => {
      let newStep = merge({}, this.state.steps);
      const stepIdx = this.state.steps.indexOf(this.state.steps.find(step => step.id === id));
      newStep[stepIdx][field] = e.target.value;
      this.setState({steps: Object.keys(newStep).map(
        (id) => {
          return newStep[id];
        }
      )}, () => this.props.updateStep(this.state.steps[stepIdx]));
    };
  }


  render(){

    return (
      <div id='steps-edit'>
        {this.renderSteps()}
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }

}

export default StepNewEdit;
