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
  }

  update(field){
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.processForm({username: this.state.username,
      password: this.state.password}).then( () =>
      hashHistory.push('/'));
  }

  render(){
    return (
      <form onSubmit = {this.handleSubmit}
        id="form">
        {this.props.errors.base}
        <label id='username'>
          <input type='text'
            onChange={this.update('username')}
            value={this.state.username}
            id='textbox'
            placeholder='Username'
            />
        </label>
        <label id='password'>
          <input type='password'
            onChange={this.update('password')}
            value={this.state.password}
            id='textbox'
            placeholder='Password'
            />
        </label>
        <button id='submit'>
          {this.props.formType === '/login' ? 'Login' : 'Sign Up'}
        </button>
        <img id='login-img' src={window.loginimage}/>
      </form>
    );
  }
}

export default SessionForm;
