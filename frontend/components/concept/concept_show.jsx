import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import ConceptNav from './concept_sub/concept_nav';
import ConceptsStepsComments from './concept_sub/concepts_steps_comments';
import UserInfo from './concept_sub/user_info';
import stickykit from 'sticky-kit/dist/sticky-kit';



class ConceptShow extends React.Component{

  componentDidMount(){
    this.props.fetchConcept(this.props.params.conceptId).then(
      () => MathJax.Hub.Typeset()
    );
    // $('#concept-nav').stick_in_parent()
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.conceptId !== nextProps.params.conceptId){
      this.props.fetchConcept(nextProps.params.conceptId).then(
        () => MathJax.Hub.Typeset()
      );
    }

  }

  render(){
    if (!this.props.concept) return null;
    let concept = this.props.concept;
    return(
      <div className='concept-show-container'>
        <div className='concept-show' >

            <ConceptNav
              title={concept.title}
              username={concept.username}
              category={concept.categories}/>

          <div className='concept-show-body'>
            {(concept.images_url)?
              <ConceptsStepsComments
              images={concept.images_url}
              description = {concept.description}
              steps = {concept.steps}
              conceptId = {concept.id}
              currentUser = {this.props.currentUser}
              publish = {concept.publish}
              />
            : null}
            <UserInfo
              username={concept.username}
              concepts={concept.concepts}
              id = {concept.id}
              currentUser = {this.props.currentUser}
              />
          </div>
        </div>
      </div>

    );
  }
}

export default ConceptShow;
