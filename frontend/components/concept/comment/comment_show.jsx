import React from 'react';
import ReactDOM from 'react-dom';

class CommentShow extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      comments: this.props.comments
    };
    this.update = this.update.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  componentDidMount(){
    this.props.fetchComments(`/concepts/${this.props.conceptId}`).then(
      action => {
        this.setState({comments: Object.keys(action.comments).map(
        (id) => {
          return action.comments[id];
        }
      )},() => {});}
    );
  }

  componentWillReceiveProps(newProps) {

    if (newProps.conceptId !== this.props.conceptId){
      newProps.fetchComments(`/concepts/${newProps.conceptId}`).then(
        action => {
          this.setState({comments: Object.keys(action.comments).map(
            (id) => {
              return action.comments[id];
            }
          )
        },() => {});}
      );
    }


    if (newProps.comments.length !== this.props.comments.length) {
      this.setState({comments: newProps.comments}, () => {});
    }
  }

  update(field){
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  renderComments(){
    return(
      this.state.comments.map(comment => {
        return(
          <li key={comment.id}
            className='comments-render'>
            <p className='comments-render-author'>
              {`${comment.username}`}
            </p>
            <textarea value= {comment.content}
              className='comments-render-text'/>

          </li>
        );
      })
    );
  }

  render(){
    return (
      <div className='comments'>
        <ul>
          {this.renderComments()}
        </ul>
      </div>

    );
  }
}

export default CommentShow;
