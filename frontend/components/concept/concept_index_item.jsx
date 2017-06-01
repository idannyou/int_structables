import React from 'react';
import { Link } from 'react-router';
import {hashHistory} from 'react-router';


const toEdit = (id) => {
  let url= `/concepts/${id}/edit`
  hashHistory.push(url)
}

const ConceptIndexItem = ({concept, pathname}) => {
  return (
    <li className='concept-index-item'>
      <div>
        <Link to={`/concepts/${concept.id}`}>
          <img src={concept.images_url}
            className='concept-index-img'/>
        </Link>
        {(!pathname)? null:
          <button onClick={()=>toEdit(concept.id)}>
            Edit
          </button>}
      </div>

      <div className='concept-index-text'>
        <div>
          <Link to={`/concepts/${concept.id}`}
            className='concept-index-title'>
            {concept.title}
          </Link>
        </div>

        <label className='concept-index-username'>
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
