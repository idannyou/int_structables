import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

class ConceptNav extends React.Component{

  render(){
    return(
      <div id='concept-nav'>
        <h1 id='concept-nav-title'>
          Rocket Pen
        </h1>
        <div>
          <h3 id='concept-nav-author'>
            by
            <a>
              hfxmakerspace
            </a>
          </h3>
          <h3 id='concept-nav-category'>
            in
            <a>
              organizing
            </a>
          </h3>
        </div>
        <div id='concept-nav-buttons'>
          <button id='concept-nav-hide'>
            Hide
          </button>
          <button id='concept-nav-all'>
            <img id='concept-nav-img' src={window.downimage} />
          </button>
          <button id='concept-nav-right'>
            <img id='concept-nav-img' src={window.rightimage} />
          </button>
        </div>

      </div>
    );
  }
}

export default ConceptNav;
