import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

class ConceptsStepsComments extends React.Component{


  render(){
    return(
      <div id='concept-show-concept-step'>
        <div id='concept-show-concept'>
          CONCEPTS
        </div>
        <div id='concept-show-step-comments'>

          STEPS AND COMMENTS GO HERE!
        </div>
      </div>
    );
  }
}

export default ConceptsStepsComments;
