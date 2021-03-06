import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ConceptReducer from './concept_reducer';
import ImageReducer from './image_reducer';
import CommentReducer from './comment_reducer';
import StepReducer from './step_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  concepts: ConceptReducer,
  images: ImageReducer,
  steps: StepReducer,
  comments: CommentReducer
});

export default rootReducer;
