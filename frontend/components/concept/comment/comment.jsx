import React from 'react';
import ReactDOM from 'react-dom';

class Comment extends React.Component{

  componentDidMount(){
    if (this.props.conceptId){
      this.props.fetchComments(`concepts/${this.props.conceptId}`).then(
        action => this.setState({comments: action.comments},()=>{})
      );
    }
  }

  render(){
    return (
      <div>
        WORKING COMMENT
      </div>

    );
  }
}

export default Comment;
