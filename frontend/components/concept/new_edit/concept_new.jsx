import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import stickykit from 'sticky-kit/dist/sticky-kit';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class ConceptNew extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  componentDidMount(){
    this.setState({modalOpen: true, title: '', description: ''}, ()=>{});
  }

  handleSubmit(e){
    e.preventDefault();
    let that = this;
    this.props.createConcept({title: this.state.title, description: this.state.description}).then(
      (promise) => {
        let url = `concepts/${promise.concept.id}/edit`;
        that.onModalClose();
        hashHistory.push(url);
      }
    );
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  onModalClose(){
    this.setState({modalOpen: false});
  }

  render(){
    return(
      <Modal
        isOpen={this.state.modalOpen}
        contentLabel="Modal"
        onSubmit={this.onModalClose}
        style={ModalStyle}
        >
        <form onSubmit={this.handleSubmit}>
          <img src={window.newheader} />
          <div id='concept-edit-modal-body'>
            <h2 id='concept-edit-title'>My Concept is on:</h2>
            <input type='text'
              id='concept-edit-modal-title'
              placeholder={(this.props.errors && this.props.errors['title'])? `Title ${this.props.errors['title']}`:'Title'}
              onChange={this.update('title')} />
            <textarea wrap='hard'
              placeholder= {(this.props.errors && this.props.errors['description']) ? `Description ${this.props.errors['description']}`:'Description'}
              id='concept-edit-modal-description'
              onChange={this.update('description')}>
            </textarea>
            <input type='submit'
              id='concept-edit-modal-submit'
              value= 'Start Concept'/>
          </div>
        </form>
      </Modal>
    );
  }

}
export default ConceptNew;
