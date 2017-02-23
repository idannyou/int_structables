import { connect } from 'react-redux';
import Comment from './comment';
import {createComment,
        deleteComment,
        fetchComments,
        updateComment} from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let comment, errors, conceptId;
  if (state.comments.errors){
    errors = state.comments.errors;
  } else {
    errors = null ;
  }

  conceptId = ownProps.conceptId;

  return {comment, errors, conceptId};

};

const mapDispatchToProps = (dispatch, ownProps) => {
  let location = ownProps;
  return {
    createComment: (formData, location) => dispatch(createComment(formData, location)),
    deleteComment: (id, location) => dispatch(deleteComment(id, location)),
    fetchComments: (location) => dispatch(fetchComments(location)),
    updateComment: (formData,location, id) => dispatch(updateComment(formData, location, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
