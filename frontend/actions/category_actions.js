import * as CategoryApiUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

export const removeCategory = (categories_concept) => {
  return {
    type: REMOVE_CATEGORY,
    categories_concept
  };
};

export const receiveCategory = (categories_concept) => {
  return {
    type: RECEIVE_CATEGORY,
    categories_concept
  };
};

export const createCategory = (categories_concept) => (dispatch) =>{
  return CategoryApiUtil.createCategory(categories_concept).then(
    (categories_concept) => dispatch(receiveCategory(categories_concept))
  );
};

export const deleteCategory = (id) => (dispatch) => {
  CategoryApiUtil.deleteCategory(id).then(
    (categories_concept) => dispatch(removeCategory(categories_concept))
  );
};
