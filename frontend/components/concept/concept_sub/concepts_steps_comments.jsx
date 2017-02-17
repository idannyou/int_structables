import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

class ConceptsStepsComments extends React.Component{


  render(){
    let concept = this.props;
    return(
      <div id='concept-show-concept-step'>
        <div id='concept-show-concept'>
          <img src={concept.image_url} />
        </div>
        <div id='concept-show-description'>
          {concept.description}
        </div>
        <div id='concept-show-step-comments'>

          STEPS AND COMMENTS GO HERE!
        </div>
      </div>
    );
  }
}

export default ConceptsStepsComments;
