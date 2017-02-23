import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import CommentContainer from '../comment/comment_container';

class ConceptsStepsComments extends React.Component{

  constructor(props){
    super(props);
    this.renderSmallImgs = this.renderSmallImgs.bind(this);
    this.renderSteps = this.renderSteps.bind(this);
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

  renderSteps(){
    if(!this.props.steps) return null;
    return this.props.steps.map((obj, idx) => (
      <div key={obj.id}>
        <h1>{`Step ${idx + 1}`}</h1>
        <img src={this.props.steps[idx].images_url[0]} />
        <h5>{this.props.steps[idx].body}</h5>
      </div>
    ));
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
          <div id='concept-show-steps'>
            {this.renderSteps()}
          </div>
          <div id='concept-show-comments'>
            <CommentContainer
              conceptId = {this.props.conceptId}/>
          </div>

        </div>
      </div>
    );
  }
}

export default ConceptsStepsComments;
