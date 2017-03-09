import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

class ConceptNav extends React.Component{

  render(){
    let concept=this.props;
    return(
      <div id='concept-nav'>
        <h1 id='concept-nav-title'>
          {concept.title}
        </h1>
        <div>
          <h3 id='concept-nav-author'>
            by
            <a>
              {concept.username}
            </a>
          </h3>
          {
          ( concept.category && concept.category.length > 0)?
            <h3 id='concept-nav-category'>
              in
              <a>
                {concept.category[0].name}
              </a>
            </h3>
            : null
          }
        </div>

      </div>
    );
  }
}

export default ConceptNav;
