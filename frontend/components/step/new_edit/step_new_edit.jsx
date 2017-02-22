import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import ImagesContainer from '../images/images_container';

class StepNewEdit extends React.Component{

  constructor(props){
    super(props);
    this.state={
      stepsHash: {}
    };
    this.addStep = this.addStep.bind(this);
    this.stepBody = this.stepBody.bind(this);
    this.renderStep = this.renderStep.bind(this);
    this.removeStep = this.removeStep.bind(this);
  }

  stepBody(){
    let length = Object.keys(this.state.stepsHash).length;
    return (
      <textarea/>
    );
  }

  addStep(){
    let array = Object.keys(this.state.stepsHash);
    let lastKey = array[array.length - 1];
    let hash = Object.assign({}, this.state.stepsHash, {[lastKey+1]: this.stepBody()});
    this.setState({stepsHash: hash}, ()=> {});
  }

  removeStep(key){
    let array = this.state.stepsHash;
    let hash = Object.assign({}, this.state.stepsHash);
    delete hash[key];
    this.setState({stepsHash: hash}, ()=>{});
    return (e) => {
      e.preventDefault();
    };
  }

  renderStep(){
    let stepsArray = Object.keys(this.state.stepsHash);
    if (stepsArray.length === 0) return null;
    return (
      stepsArray.map((key, idx) => (
          <div
            key={idx}>
            <h1>Step {idx + 1}</h1>
            {this.state.stepsHash[key]}
            <button onClick={() => this.removeStep(key)}>
              Remove Step {idx + 1}
            </button>
          </div>

      ))

    );
  }



  render(){
    return (
      <div>
        {this.renderStep()}
        <button onClick={this.addStep}>Add Step</button>
      </div>
    );
  }

}

export default StepNewEdit;
