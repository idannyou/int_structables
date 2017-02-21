import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import ConceptIndexItem from './concept_index_item';

class ConceptIndex extends React.Component{

  componentDidMount(){
    this.props.fetchConcepts();
  }

  render(){
    return(
      <div id='concept-index-container'>
        <ul id='concept-index'>
          {
            this.props.concepts.map((concept,idx) => {
              return(
                <ConceptIndexItem
                  key = {idx}
                  concept={concept} />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default ConceptIndex;
