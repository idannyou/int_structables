import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ConceptReducer from './concept_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  concepts: ConceptReducer
});

export default rootReducer;
