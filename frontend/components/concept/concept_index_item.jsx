import React from 'react';
import { Link } from 'react-router';

const ConceptIndexItem = ({concept}) => {
  return (
    <li id='concept-index-item'>
      <Link to={`/concepts/${concept.id}`}>
        <img src={concept.image_url}
          id='concept-index-img'/>
      </Link>

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
