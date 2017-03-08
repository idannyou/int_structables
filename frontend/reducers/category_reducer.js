import {RECEIVE_CATEGORY,
        REMOVE_CATEGORY
      } from '../actions/category_actions';

import {merge} from 'lodash';

const CategoryReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({},state);
  switch (action.type) {
    case RECEIVE_CATEGORY:
      newState[action.category.id]= action.category;
      return newState;
    case REMOVE_CATEGORY:
      delete newState[action.category.id];
      return newState;
    default:
      return state;
  }
};

export default CategoryReducer;
