import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ConceptReducer from './concept_reducer';
import ImageReducer from './image_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  concepts: ConceptReducer,
  images: ImageReducer
});

export default rootReducer;
