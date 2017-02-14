import configureStore from './store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store, preloadedState;
  if (window.currentUser){
    store = configureStore(preloadedState = {session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }
  // Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, root);
});
