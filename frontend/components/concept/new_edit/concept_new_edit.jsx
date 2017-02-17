import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import stickykit from 'sticky-kit/dist/sticky-kit';

class ConceptNewEdit extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.concept;
  }

  componentDidMount(){
    if (this.props.params.conceptId){
      this.props.fetchConcept(this.props.params.conceptId);
    }
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.concept);
  }

  render(){
    if(!this.state) return null;
    return (
      <div>
        {this.state.title}
        {this.state.description}
        {this.state.image_url}
      </div>
    );
  }

}

export default ConceptNewEdit;
