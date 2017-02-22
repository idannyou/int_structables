import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

class ConceptsStepsComments extends React.Component{

  constructor(props){
    super(props);
    this.renderSmallImgs = this.renderSmallImgs.bind(this);

  }

  renderSmallImgs(){
    let concept = this.props.images;
    if (concept.length < 2 && !Array.isArray(concept)) return null;
    if (concept.length > 1 && Array.isArray(concept)){
      return concept.map((image, idx) =>{
        if(idx !== 0){
          return (
            <li key={idx}>
              <img
                  src={image}/>

            </li>
          );
        }
      });
    } else {
      return null;
    }
  }

  render(){
    let concept = this.props.images;
    return(
      <div id='concept-show-concept-step'>
        <div id='concept-show-concept'>
          <img src={concept[0]} />
        </div>
        <div >
          <ul id='concept-show-small-imgs'>
            {this.renderSmallImgs()}
          </ul>
        </div>
        <div id='concept-show-description'>
          {this.props.description}
        </div>
        <div id='concept-show-step-comments'>

          STEPS AND COMMENTS GO HERE!
        </div>
      </div>
    );
  }
}

export default ConceptsStepsComments;
