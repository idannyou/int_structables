import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
class Welcome extends React.Component{

  constructor(props){
    super(props);
    this.loggedin = this.loggedin.bind(this);
    this.notloggedin = this.notloggedin.bind(this);

  }

  loggedin(){
    return (
      <div>
        <h1>Welcome {this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>
        Log Out
        </button>
      </div>
    );
  }

  notloggedin(){
    return (
      <div>
        <Link to='/signup'>Sign Up </Link>
        <Link to='/login'>Log In </Link>
      </div>
    );
  }

  render(){

    return (
      <div>
      {
        !!this.props.currentUser ?
          this.loggedin() :
          this.notloggedin()
      }
      </div>
    );
  }


}


export default Welcome;
