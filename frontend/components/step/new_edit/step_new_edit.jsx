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

  stepBody(stepKey){
    return (
      <div>
        <textarea key={stepKey}/>
        <button onClick={() => this.removeStep(stepKey)}>
          Remove
        </button>
      </div>
    );
  }

  addStep(){
    let array = Object.keys(this.state.stepsHash);
    let lastKey = (array[array.length - 1])? array[array.length - 1] : 0;
    let hash = Object.assign({}, this.state.stepsHash, {[parseInt(lastKey)+1]: this.stepBody(parseInt(lastKey)+1)});
    this.setState({stepsHash: hash}, ()=> {});
  }

  removeStep(stepKey){
    let hash = Object.assign({}, this.state.stepsHash);
    delete hash[stepKey];
    this.setState({stepsHash: hash}, ()=>{});
    return (e) => {
      e.preventDefault();
    };
  }

  renderStep(){
    let stepsArray = Object.keys(this.state.stepsHash);
    if (stepsArray.length === 0) return null;
    return (
      stepsArray.map((stepKey, idx) => (
          <div
            key={stepKey}>
            <h1>Step {idx + 1}</h1>
            {this.state.stepsHash[stepKey]}
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
