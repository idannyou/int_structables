import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

class UserInfo extends React.Component{


  render(){
    let concept=this.props;
    return(
      <div id='concept-show-user-info'>
        <div id='concept-show-heading'>
          About This Concept
        </div>
        <div id='concept-show-username'>
          {concept.username}
        </div>
        <div id='concept-show-userconcepts'>
          <div>
            {`Other Concepts By ${concept.username}`}
          </div>
          <div id='concept-show-concepts-imgs'>
            {
              (!concept.concepts)? (null) : concept.concepts.map((ele) => {
                if (ele.id !== concept.id){
                  return(
                    <Link to={`/concepts/${ele.id}`}
                      key={ele.id}>
                      <img src={ele.image_url}/>
                    </Link>
                  );
                }
              })
            }
          </div>
        </div>

      </div>
    );
  }
}

export default UserInfo;
