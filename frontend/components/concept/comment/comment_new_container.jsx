import { connect } from 'react-redux';
import CommentNew from './comment_new';
import {createComment,
        deleteComment,
        fetchComments,
        updateComment} from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let errors, conceptId;
  if (state.comments.errors){
    errors = state.comments.errors.responseJSON;
  } else {
    errors = null ;
  }

  conceptId = ownProps.conceptId;

  return {errors, conceptId};

};

const mapDispatchToProps = (dispatch, ownProps) => {
  let location = ownProps;
  return {
    createComment: (comment, location) => dispatch(createComment(comment, location)),
    deleteComment: (id, location) => dispatch(deleteComment(id, location)),
    fetchComments: (location) => dispatch(fetchComments(location)),
    updateComment: (comment,location, id) => dispatch(updateComment(comment, location, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentNew);
