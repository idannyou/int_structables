import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import ConceptShowContainer from './concept/concept_show_container';
import Home from './home/home'
import ConceptNewEditContainer from './concept/new_edit/concept_new_edit_container';
import ConceptUserContainer from './concept/concept_user/concept_user_container';
import {fetchConcept} from '../actions/concept_actions';
import StepNewEditContainer from './step/new_edit/step_new_edit_container';

const Root = ( {store} ) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser)(
      replace('/')
    );
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _ensureUser = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser){
      replace('/');
      aSync() ;
    }
    if (currentUser.id !== parseInt(nextState.params.userId)) {
      replace('/');
    }
  };

  const _ensureAuthor = (nextState, replace, aSync) => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser){
      replace('/');
      aSync() ;
    }
    store.dispatch(fetchConcept(nextState.params.conceptId)).then( () => {

      if (!currentUser || store.getState().concepts[nextState.params.conceptId].user_id !== currentUser.id) {
        replace("/");
      }
      aSync();
    });

  }

  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path='/' component={ App } >
          <IndexRoute component={Home} />
          <Route path='concepts/new' component={ConceptNewEditContainer} onEnter={_ensureLoggedIn} />
          <Route path='/concepts/user/:userId' component={ConceptUserContainer} onEnter={_ensureUser}/>
          <Route path='concepts/:conceptId' component={ConceptShowContainer}/>
          <Route path='concepts/:conceptId/step/:stepId' component={StepNewEditContainer}/>
          <Route path='concepts/:conceptId/edit' component={ConceptNewEditContainer} onEnter={_ensureAuthor}/>
      </Route>
      </Router>
    </Provider>
  );
};




export default Root;
