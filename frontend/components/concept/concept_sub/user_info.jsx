import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

class UserInfo extends React.Component{


  render(){
    return(
      <div id='concept-show-user-info'>
        <div id='concept-show-heading'>
          About This Concept
        </div>
        <div id='concept-show-username'>
          USER INFO
        </div>
        <div id='concept-show-userconcepts'>
          OTHER CONCEPTS BY THIS USER
          TURN UP
          TURN UP
          TURN UP
          TURN UP
          TURN UP
          TURN UP
          TURN UP
          TURN UP
          TURN UP
        </div>

      </div>
    );
  }
}

export default UserInfo;
