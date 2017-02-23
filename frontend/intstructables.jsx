import configureStore from './store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store, preloadedState;
  if (window.currentUser){
    window.store = configureStore(preloadedState = {session: {currentUser: window.currentUser}});
  } else {
    window.store = configureStore();
  }
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={window.store} />, root);
});
