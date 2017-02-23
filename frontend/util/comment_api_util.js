export const createComment = (comment, location) => {
  return $.ajax({
    method: 'POST',
    url: `/api/${location}/comments`,
    data: {comment}
  });
};

export const updateComment = (comment, location, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/${location}/comments/${id}`,
    data: {comment}
  });
};

export const deleteComment = (id, location) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/${location}/comments/${id}`
  });
};

export const receiveComments = (location) => {
  return $.ajax({
    method: 'GET',
    url: `api/${location}/comments`
  });
};
