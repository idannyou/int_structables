import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import ConceptIndexItem from '../concept/concept_index_item';

class SearchPage extends React.Component{

  constructor(props){
    super(props);
    this.publishOrNot = this.publishOrNot.bind(this);
  }

  componentDidMount(){
    if (this.props.route.path !== 'search'){
      this.props.fetchSpecificConcepts(this.props.route.path);
    }
  }


  publishOrNot(){
    return this.props.concepts.map((concept,idx) => {
      if(!concept) return 'No Results';
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

export default SearchPage;
