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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBody = this.setBody.bind(this);
    this.propsToStepsHash = this.propsToStepsHash.bind(this);
    this.stepPropBody = this.stepPropBody.bind(this);
  }

  componentDidMount(){
    this.props.fetchSteps(this.props.conceptId).then(
      (promise) => this.propsToStepsHash(promise.steps)
    );
  }

  propsToStepsHash(propsHash){
    let stepObj = {};
    Object.keys(propsHash).map((stepKey) => {
      stepObj[stepKey] = this.stepPropBody(stepKey, propsHash[stepKey].body);
      // stepObj[key][1] = propsHash.key.body;
    });
    this.setState({stepsHash: stepObj});
  }

  stepPropBody(stepKey, body){
    return (
      <div>
        <textarea key={stepKey}
                  onChange={this.setBody(stepKey)}
                  value='hello'/>
                {body}
        <button onClick={() => this.removeStep(stepKey)}>
          Remove
        </button>
      </div>
    );
  }

  stepBody(stepKey){
    return (
      <div>
        <textarea key={stepKey}
                  onChange={this.setBody(stepKey)}/>
        <button onClick={() => this.removeStep(stepKey)}>
          Remove
        </button>
      </div>
    );
  }

  setBody(stepKey){
    return (e) => {
      let stepObj = Object.assign({},this.state.stepsHash);
      stepObj[stepKey][1]=(e.target.value);
      this.setState({stepsHash: stepObj});
    };
  }

  addStep(){
    let array = Object.keys(this.state.stepsHash);
    let lastKey = (array[array.length - 1])? array[array.length - 1] : 0;
    let hash = Object.assign({}, this.state.stepsHash, {[parseInt(lastKey)+1]: [this.stepBody(parseInt(lastKey)+1)]});
    this.setState({stepsHash: hash}, ()=> {});
  }

  removePropStep(stepKey){
    this.props.deleteStep(stepKey);
    return(e) => {
      e.preventDefault();
    };
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
    debugger
    if (stepsArray.length === 0) return null;
    return (
      stepsArray.map((stepKey, idx) => (
          <div
            key={stepKey}>
            <h1>Step {idx + 1}</h1>
            {this.state.stepsHash[stepKey][0]}
          </div>

      ))

    );
  }

  handleSubmit(e){
    e.preventDefault()
    let bodyHash = {};
    Object.keys(this.state.stepsHash).map((step, idx) => {
      if(this.state.stepsHash[step][1]){
        bodyHash[idx]=(this.state.stepsHash[step][1]);
      } else {
        bodyHash[idx]='';
      }
    });
    console.log(bodyHash)
    this.props.createStep(bodyHash, this.props.conceptId);
  }



  render(){
    return (
      <div>
        {this.renderStep()}
        <button onClick={this.addStep}>Add Step</button>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }

}

export default StepNewEdit;
