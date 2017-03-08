export const createCategory = (categories) => {
  return $.ajax({
    method: 'POST',
    url: `/api/categories_concepts`,
    data: {categories}
  });
};

export const deleteCategory = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/categories_concepts/${id}`
  });
};
