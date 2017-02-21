import React from 'react';
import { Link } from 'react-router';
import {hashHistory} from 'react-router';


const toEdit = (id) => {
  let url= `/concepts/${id}/edit`
  hashHistory.push(url)
}

const ConceptIndexItem = ({concept, pathname}) => {
  return (
    <li id='concept-index-item'>
      <div>
        <Link to={`/concepts/${concept.id}`}>
          <img src={concept.images_url}
            id='concept-index-img'/>
        </Link>
        {(!pathname)? null:
          <button onClick={()=>toEdit(concept.id)}>
            Edit
          </button>}
      </div>

      <div id='concept-index-text'>
        <div>
          <Link to={`/concepts/${concept.id}`}
            id='concept-index-title'>
            {concept.title}
          </Link>
        </div>

        <label id='concept-index-username'>
          by
          <a>
            {concept.username}
          </a>
        </label>
      </div>
    </li>
  )
};



export default ConceptIndexItem;
