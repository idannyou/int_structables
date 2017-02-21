import { connect } from 'react-redux';
import Images from './images';
import {createImage,
        deleteImage,
        fetchImages,
        updateImage} from '../../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    images: state.images
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  let location = ownProps;
  return {
    createImage: (formData, location) => dispatch(createImage(formData, location)),
    deleteImage: (id, location) => dispatch(deleteImage(id, location)),
    fetchImages: (location) => dispatch(fetchImages(location)),
    updateImage: (formData,location, id) => dispatch(updateImage(formData, location, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
