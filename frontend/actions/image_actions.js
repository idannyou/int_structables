import * as ImageApiUtil from '../util/image_api_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const removeImage = (image) => {
  return {
    type: REMOVE_IMAGE,
    image
  };
};

export const receiveImages = (images) => {
  return {
    type: RECEIVE_IMAGES,
    images
  };
};

export const receiveImage = (image) => {
  return {
    type: RECEIVE_IMAGE,
    image
  };
};

export const createImage = (formData, location) => (dispatch) =>{
  return ImageApiUtil.createImage(formData,location).then(
    (image) => dispatch(receiveImage(image))
  );
};

export const deleteImage = (id, location) => (dispatch) => {
  ImageApiUtil.deleteImage(id, location).then(
    (image) => dispatch(removeImage(image))
  );
};

export const fetchImages = (location) => (dispatch) => {
  return ImageApiUtil.receiveImages(location).then(
      (images) => dispatch(receiveImages(images))
  );
};

export const updateImage = (formData, location, id) => (dispatch) => {
  return ImageApiUtil.updateImage(formData, location, id).then(
      (image) => dispatch(receiveImage(image))
  );
};
