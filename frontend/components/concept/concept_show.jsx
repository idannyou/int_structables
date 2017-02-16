import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import ConceptNav from './concept_sub/concept_nav';
// import ConceptNav from './concept_sub/'


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
          <ConceptsStepsComments />
          <UserInfo />
        </div>
      </div>

    );
  }
}

export default ConceptShow;
