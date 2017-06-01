import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import ConceptIndexItem from '../concept_index_item';

class ConceptUser extends React.Component{

  constructor(props){
    super(props);
    this.publish = this.publish.bind(this);
    this.notPublish = this.notPublish.bind(this);
  }

  componentDidMount(){
    this.props.fetchConcepts();
  }

  publish(){
    return this.props.concepts.map((concept,idx) => {
      if(!concept.publish) return null;
      if(concept.publish === true && concept.username === this.props.currentUsername){
        return (<ConceptIndexItem
          key = {idx}
          concept={concept}
          pathname = {this.props.location.pathname}
          />
      );
      }
    });
  }

  notPublish(){
    return this.props.concepts.map((concept,idx) => {
      if(concept.publish === false && concept.username === this.props.currentUsername){
        return (<ConceptIndexItem
          key = {idx}
          concept={concept}
          pathname = {this.props.location.pathname}
          />
      );
      }
    });
  }

  render(){
    if(!this.props.concepts) return null;
    return(
      <div className='concept-user-container'>
        <h1 className='concept-user-title'>Published</h1>
        <ul className='concept-index'>
          {
            this.publish()
          }
        </ul>
        <div className='concept-user-notpublish'>
          <h1 className='concept-user-title-notpub'>Not Published</h1>
          <ul className='concept-index'>
            {
              this.notPublish()
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default ConceptUser;
