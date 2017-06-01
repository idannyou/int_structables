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

  componentWillReceiveProps(newProps) {
    this.setState({content: ''});
  }

  createComment(e){
    this.props.createComment(this.state, `concepts/${this.props.conceptId}`)
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
      <div className='comments-new'>
        <form onSubmit={this.createComment}>
          {(this.props.errors)?`Content ${this.props.errors['content'][0]}`: ''}
          <textarea
            onChange={this.update('content')}
            value={this.state.content}
            className='comments-new-text'
            />
          <div className='comments-new-button-contain'>
            <input type='submit'
              value='Post Comment'
              className='comments-new-button'
              />

          </div>
        </form>
      </div>

    );
  }
}

export default CommentNew;
