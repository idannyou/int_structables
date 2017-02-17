import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import ConceptShowContainer from './concept/concept_show_container';
import Home from './home/home'
import ConceptNewEditContainer from './concept/new_edit/concept_new_edit_container';

const Root = ( {store} ) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser)(
      replace('/')
    );
  };

  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path='/' component={ App } >
          <IndexRoute component={Home} />
          <Route path='concepts/new' component={ConceptNewEditContainer} />
          <Route path='concepts/:conceptId' component={ConceptShowContainer}/>
          <Route path='concepts/:conceptId/edit' component={ConceptNewEditContainer}/>
      </Route>
      </Router>
    </Provider>
  );
};




export default Root;
