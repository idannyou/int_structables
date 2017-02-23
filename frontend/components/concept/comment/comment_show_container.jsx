import { connect } from 'react-redux';
import CommentShow from './comment_show';
import {createComment,
        deleteComment,
        fetchComments,
        updateComment} from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let comments, errors, conceptId;
  if (state.comments.errors){
    errors = state.comments.errors.responseJSON;
  } else {
    errors = null ;
  }
  comments = Object.keys(state.comments.comments).map(
    (id) => {
      return state.comments.comments[id];
    }
  );

  conceptId = ownProps.conceptId;

  return {comments, errors, conceptId};

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

export default connect(mapStateToProps, mapDispatchToProps)(CommentShow);
