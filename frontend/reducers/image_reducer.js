import {RECEIVE_IMAGES,
        RECEIVE_IMAGE,
        REMOVE_IMAGE
      } from '../actions/image_actions';

import {merge} from 'lodash';

const ImageReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_IMAGES:
      return action.images;
    case RECEIVE_IMAGE:
      return merge({}, state, {
        [action.image.id]: action.image
      });
    case REMOVE_IMAGE:
      const newState = merge({}, state);
      delete newState[action.image.id];
      return newState;
    default:
      return state;
  }
};

export default ImageReducer;
