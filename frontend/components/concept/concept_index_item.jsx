import React from 'react';

const ConceptIndexItem = ({concept}) => {
  return (
    <li id='concept-index-item'>
      <img src={concept.image_url}
        id='concept-index-img'/>
      <div id='concept-index-text'>

        <label id='concept-index-title'>
          {concept.title}
        </label>
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
