import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import ConceptNav from './concept_sub/concept_nav';
import ConceptsStepsComments from './concept_sub/concepts_steps_comments';
import UserInfo from './concept_sub/user_info';


class ConceptShow extends React.Component{

  componentDidMount(){
    this.props.fetchConcept(this.props.params.conceptId);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.conceptId !== nextProps.params.conceptId){
      this.props.fetchConcept(nextProps.params.conceptId);
    }
  }

  render(){
    if (!this.props.concept) return null;
    return(
      <div id='concept-show-container'>
        <div id='concept-show' >
          <ConceptNav />
          <div id='concept-show-body'>
            <ConceptsStepsComments />
            <UserInfo />
          </div>
        </div>
      </div>

    );
  }
}

export default ConceptShow;
