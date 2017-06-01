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
    if (this.props.concepts.length === 0){
      return (
        <h1 className='search-no-results'>
          No Results
        </h1>
      );
    }
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
      <div className='concept-index-container'>
        <ul className='concept-index'>
          {
            this.publishOrNot()
          }
        </ul>
      </div>
    );
  }
}

export default SearchPage;
