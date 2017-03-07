import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import CommentNewContainer from '../comment/comment_new_container';
import CommentShowContainer from '../comment/comment_show_container';



class ConceptsStepsComments extends React.Component{

  constructor(props){
    super(props);
    this.renderSmallImgs = this.renderSmallImgs.bind(this);
    this.renderSteps = this.renderSteps.bind(this);
    this.merge = this.merge.bind(this);
    this.mergeSort = this.mergeSort.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
      MathJax.Hub.Typeset();
  }

  merge(left, right) {
    const merged = [];

    while (left.length > 0 && right.length > 0) {
      let nextItem = (left[0].order < right[0].order) ? left.shift() : right.shift();
      merged.push(nextItem);
    }

    return merged.concat(left, right);
  }

  mergeSort(StepArray) {
    if (StepArray.length < 2) {
      return StepArray;
    } else {
      const middle = Math.floor(StepArray.length / 2);

      const left = this.mergeSort(StepArray.slice(0, middle));
      const right = this.mergeSort(StepArray.slice(middle));

      return this.merge(left, right);
    }
  }

  renderSmallImgs(){
    let concept = this.props.images;
    if (concept.length < 2 && !Array.isArray(concept)) return null;
    if (concept.length > 1 && Array.isArray(concept)){
      return concept.map((image, idx) =>{
        if(idx !== 0){
          return (
            <li key={idx}>
              {(!image)? null:
              <img
                  src={image}/>}
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
    let orderedSteps = this.mergeSort(this.props.steps);
    return orderedSteps.map((obj, idx) => (
      <div key={obj.id}>
        <h1 id='concept-show-step-heading'
          >{`Step ${idx + 1}: ${obj.title}`}</h1>
        {(!orderedSteps[idx].images_url[0])? null :
          <div id='concept-show-concept'>
            <img src={orderedSteps[idx].images_url[0]} />
          </div>
        }
        <h5 id='concept-show-step-p'>{orderedSteps[idx].body}</h5>
      </div>
    ));
  }

  render(){
    let concept = this.props.images;
    return(
      <div id='concept-show-concept-step'>
        {(!concept[0])? null:
          <div id='concept-show-concept'>
            <img src={concept[0]} />
          </div>
        }
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
            <CommentNewContainer
              conceptId = {this.props.conceptId}/>
            <CommentShowContainer
              conceptId = {this.props.conceptId}/>
          </div>

        </div>
      </div>
    );
  }
}

export default ConceptsStepsComments;
