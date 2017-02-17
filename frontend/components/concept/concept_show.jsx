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
    this.props.fetchConcept(this.props.params.conceptId);
    $('#concept-nav').stick_in_parent()
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.conceptId !== nextProps.params.conceptId){
      this.props.fetchConcept(nextProps.params.conceptId);
    }
    $('#concept-nav').stick_in_parent()
  }

  render(){
    if (!this.props.concept) return null;
    let concept = this.props.concept;
    return(
      <div id='concept-show-container'>
        <div id='concept-show' >
          <ConceptNav
            title={this.props.concept.title}
            username={concept.username}/>
          <div id='concept-show-body'>
            <ConceptsStepsComments
              image_url={concept.image_url}
              description = {concept.description}
              />
            <UserInfo
              username={concept.username}
              concepts={concept.concepts}
              id = {concept.id}
              />
          </div>
        </div>
      </div>

    );
  }
}

export default ConceptShow;
