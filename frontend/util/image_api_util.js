
// example of a location is concepts/2

export const createImage = (formData, location) => {
  return $.ajax({
    method: 'POST',
    url: `/api/${location}/images`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updateImage = (formData, location, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/${location}/images/${id}`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const deleteImage = (id, location) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/${location}/images/${id}`
  });
};

export const receiveImages = (location) => {
  return $.ajax({
    method: 'GET',
    url: `api/${location}/images`
  })
}
