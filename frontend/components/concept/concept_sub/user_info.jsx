import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

class UserInfo extends React.Component{

  constructor(props){
    super(props);
    this.toEdit = this.toEdit.bind(this);
  }

  renderConceptsByGuest(){
    let concept=this.props;
    return (!concept.concepts)? (null) : concept.concepts.map((ele) => {
      if (ele.id !== concept.id && ele.publish===true){
        return(
          <Link to={`/concepts/${ele.id}`}
            key={ele.id}
            >
            <img src={ele.images_url[0]}/>
          </Link>
        );
      }
    });
  }

  toEdit(){
    let url = `concepts/${this.props.id}/edit`;
    hashHistory.push(url);
  }


  render(){
    let concept=this.props;
    return(
      <div className='concept-show-user-info'>
        <div className='concept-show-heading'>
          <div>
            About This Concept
          </div>
          {(this.props.currentUser === this.props.username)?
          <button className='createEdit'
            onClick={this.toEdit}>
            Edit
          </button> :
          null}
        </div>
        <div className='concept-show-username'>
          {concept.username}
        </div>
        <div className='concept-show-userconcepts'>
          <div>
            {`Other Concepts By ${concept.username}`}
          </div>
          <div className='concept-show-concepts-imgs'>
            {
              this.renderConceptsByGuest()
            }
          </div>
        </div>

      </div>
    );
  }
}

export default UserInfo;
