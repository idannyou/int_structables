import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Modal from 'react-modal';
import {hashHistory} from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import ModalStyle from './modal_style';

class Welcome extends React.Component{

  constructor(props){
    super(props);
    this.loggedin = this.loggedin.bind(this);
    this.notloggedin = this.notloggedin.bind(this);
    this.state = {
      modalOpen: false,
      formType: null
    };
    this._handleClick = this._handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
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
      <div className='right-nav'>
        <button onClick={this._handleClick('old')}
          id='nav-login'>
          Log In
        </button>
        <button onClick={this._handleClick('new')}
          id='nav-signup'>
          Sign Up
        </button>
      </div>
    );
  }

  _handleClick(formType){
    return (e) => {
      e.preventDefault()
      this.setState({modalOpen: true,
                      formType});
    }
  }

  onModalClose(){
    this.setState({modalOpen: false})
  }

  render(){

    return (
      <div id='nav-bar'>
        <div className='left-nav'>
          <img id='navbarlogo-img' src={window.navbarlogoimage}/>
          <h2>intStructables</h2>
        </div>

      {
        !!this.props.currentUser ?
          this.loggedin() :
          this.notloggedin()
      }
      <Modal
        isOpen={this.state.modalOpen}
        contentLabel="Modal"
        style={ModalStyle}
        onRequestClose={this.onModalClose}>
        <SessionFormContainer formType={this.state.formType}/>
      </Modal>
      </div>
    );
  }


}


export default Welcome;
