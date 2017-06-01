import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';


class SessionForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signupToggle = this.signupToggle.bind(this);
    this.signInAsGuest = this.signInAsGuest.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentDidMount(){
    this.props.clearError([]);
  }

  update(field){
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }

  handleSubmit(event){
    event.preventDefault();
    if (this.props.formType === 'new'){
      this.props.signup({username: this.state.username,
        password: this.state.password}).then( () => {
          this.props.closeModal();
      });
    } else {
      this.props.login({username: this.state.username,
        password: this.state.password}).then( () => {
          this.props.closeModal();
      });
    }
  }

  signupToggle(event){
    event.preventDefault();
    if (this.props.formType === 'new'){
      this.props.setFormType('old');
    } else if (this.props.formType === 'old'){
      this.props.setFormType('new');
    }
  }

  signInAsGuest(event){
    event.preventDefault();
    this.props.login({username: 'guest',
      password: 'guestguest'}).then( () => {
        this.props.closeModal();
      });
  }

  handleErrors(){

    let stringArray = [];

    Object.keys(this.props.errors).map(
      (attr) => {
        if (Number.isInteger(parseInt(attr))){
          stringArray.push(`${this.props.errors[attr]}`);
        } else {
          stringArray.push(`${attr} ${this.props.errors[attr]}`);
        }
    });


    return stringArray.map((message, idx) => {
      return <li key={idx}>{message}</li>;
    })

  }


  render(){
    return (
      <form onSubmit = {this.handleSubmit}
        className="form">

          <ul>
            {this.handleErrors()}
          </ul>

        <label className='username'>
          <input type='text'
            onChange={this.update('username')}
            value={this.state.username}
            className='textbox'
            placeholder='Username'
            />
        </label>
        <label className='password'>
          <input type='password'
            onChange={this.update('password')}
            value={this.state.password}
            className='textbox'
            placeholder='Password'
            />
        </label>
        <button className='submit'>
          {this.props.formType === 'old' ? 'Login' : 'Sign Up'}
        </button>
        <button className='signinasguest'
          onClick={this.signInAsGuest}>
          Sign In As Guest
        </button>
        <button className='signup'
          onClick={this.signupToggle}>
          {this.props.formType === 'old' ? "Don't have an account? Sign Up" : 'Login Instead'}
        </button>

        <img className='login-img' src={window.loginimage}/>

      </form>
    );
  }
}

export default SessionForm;
