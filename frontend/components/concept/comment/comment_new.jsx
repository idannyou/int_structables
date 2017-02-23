import React from 'react';
import ReactDOM from 'react-dom';

class CommentNew extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      content: ''
    };
    this.createComment = this.createComment.bind(this);
    this.update = this.update.bind(this);
  }

  createComment(e){
    this.props.createComment(this.state, `/concepts/${this.props.conceptId}`)
      .then(() => this.setState({content: ""}));
  }

  update(field){
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  render(){
    return (
      <div id='comments-new'>
        <form onSubmit={this.createComment}>
          {(this.props.errors)?`Content ${this.props.errors['content'][0]}`: ''}
          <textarea
            onChange={this.update('content')}
            value={this.state.content}
            id='comments-new-text'
            />
          <div id='comments-new-button-contain'>
            <input type='submit'
              value='Post Comment'
              id='comments-new-button'
              />

          </div>
        </form>
      </div>

    );
  }
}

export default CommentNew;
