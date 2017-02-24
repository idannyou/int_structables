import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Modal from 'react-modal';
import {hashHistory} from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import ModalStyle from './modal_style';
import FeatureBar from './feature_bar';
import Search from './search';

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
    this.setFormType = this.setFormType.bind(this);
    this.backToHomePage = this.backToHomePage.bind(this);
    this.toConceptNew = this.toConceptNew.bind(this);
    this.toMyConcepts = this.toMyConcepts.bind(this);
  }

  loggedin(){

    return (
      <div className='right-nav'>
        {
            <button id='myConcepts'
              onClick={this.toMyConcepts}>
              My Concepts
            </button>
        }

        {
          (this.props.pathname == '/concepts/new') ?
            null :
            <button id='createConcept'
              onClick={this.toConceptNew}>
              New Concept
            </button>
        }

        <button onClick={this.props.logout}
          id='nav-login'>
          Log Out
        </button>
        <p id='nav-signup'
          >Welcome {this.props.currentUser.username}</p>
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
      e.preventDefault();
      this.setState({modalOpen: true,
                      formType});
    };
  }

  onModalClose(){
    this.setState({modalOpen: false});
  }

  setFormType(formType){
    this.setState({formType});
  }

  backToHomePage(event){
    event.preventDefault();
    let url='';
    hashHistory.push(url);
  }

  toConceptNew(e){
      e.preventDefault();
      let url='concepts/new';
      hashHistory.push(url);
  }

  toMyConcepts(e){
      e.preventDefault();
      let url=`/concepts/user/${this.props.currentUser.id}`;
      hashHistory.push(url);
  }


  render(){

    return (
      <div>
        <div id='nav-bar'>
          <div className='left-nav'>
            <img id='navbarlogo-img' src={window.navbarlogoimage}
                  onClick={this.backToHomePage}
              />
            <h2>intStructables</h2>
          </div>


            <Search fetchSpecificConcepts={this.props.fetchSpecificConcepts}/>
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
            <SessionFormContainer setFormType={this.setFormType}
              closeModal={this.onModalClose}
              formType={this.state.formType}/>
          </Modal>
        </div>
        <FeatureBar />
      </div>
    );
  }


}


export default Welcome;
