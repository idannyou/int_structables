import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import stickykit from 'sticky-kit/dist/sticky-kit';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

const ConceptNew = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <img src={window.newheader} />
      <div id='concept-edit-modal-body'>
        <h2 id='concept-edit-title'>My Concept is on:</h2>
        <input type='text'
          id='concept-edit-modal-title'
          placeholder={(props.errors)? `Title ${props.errors['title']}`:'Title'}
          onChange={props.update('title')} />
        <textarea wrap='hard'
          placeholder= {(props.errors) ? `Description ${props.errors['description']}`:'Description'}
          id='concept-edit-modal-description'
          onChange={props.update('description')}>
        </textarea>
        <input type='submit'
          id='concept-edit-modal-submit'
          value= 'Start Concept'/>
      </div>
    </form>
  );
};

export default ConceptNew;
