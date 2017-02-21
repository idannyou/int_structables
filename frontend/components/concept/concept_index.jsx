import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import ConceptIndexItem from './concept_index_item';

class ConceptIndex extends React.Component{

  constructor(props){
    super(props);
    this.publishOrNot = this.publishOrNot.bind(this);
  }

  componentDidMount(){
    this.props.fetchConcepts();
  }

  publishOrNot(){
    return this.props.concepts.map((concept,idx) => {
      if(!concept) return null;
      if(concept.publish === true){
        return (<ConceptIndexItem
          key = {idx}
          concept={concept} />
      );
      }
    });
  }

  render(){
    return(
      <div id='concept-index-container'>
        <ul id='concept-index'>
          {
            this.publishOrNot()
          }
        </ul>
      </div>
    );
  }
}

export default ConceptIndex;
