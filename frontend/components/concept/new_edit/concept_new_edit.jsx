import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import stickykit from 'sticky-kit/dist/sticky-kit';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import ConceptNew from './concept_new';
import ImagesContainer from '../images/images_container';

class ConceptNewEdit extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.concept;
    this.update = this.update.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
  }

  componentDidMount(){
    if (this.props.params.conceptId){
      this.props.fetchConcept(this.props.params.conceptId);
    } else {
      this.setState({modalOpen: true});
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.conceptId){
      this.setState(newProps.concept);
    } else {
      this.setState({modalOpen: true});
    }
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  // renderPreviousImages(){
  //   if (!this.props.concept.images) return null;
  //   if (this.props.concept.images.length > 0){
  //     let props = this.props;
  //     let imageFileArray = this.imageFileArray;
  //     this.props.concept.images.forEach((image) => {
  //       if(!imageFileArray.includes(image)){
  //         this.imageFileArray.push(image);
  //         this.imageFileName.push(image.image_file_name);
  //       }
  //     }
  //     );
  //     this.props.concept.images_url.forEach((image_url) => {
  //       this.imageArray.push(image_url);
  //     });
  //   } else {
  //     return null;
  //   }
  // }

  handleSubmit(){
    this.props.action({title: this.state.title, description: this.state.description}).then(
      (promise) => {
        let url = `concepts/${promise.concept.id}/edit`;
        this.onModalClose();
        hashHistory.push(url);
      }
    );
  }

  onModalClose(){
    this.setState({modalOpen: false});
  }

  handlePublish(){
    if(this.state.publish === false){
      this.setState({publish: true}, () => this.props.updateConcept(this.state));
    } else {
      this.setState({publish: false}, () => this.props.updateConcept(this.state));
    }

  }



  render(){
    if(!this.state) return null;
    return (
      <div>
        {(this.props.params.conceptId)? null :
          <Modal
            isOpen={this.state.modalOpen}
            contentLabel="Modal"
            onSubmit={this.onModalClose}
            style={ModalStyle}
            >
            <ConceptNew action={this.props.action}
                        update={this.update}
                        handleSubmit={this.handleSubmit} />
          </Modal>}
        <div id='concept-edit-container'>
          <div id='concept-edit'>
            <ImagesContainer params={this.props.params}
                            state = {this.state}
                            submitConcept = {this.props.action}
                            handlePublish = {this.handlePublish}/>
            <div id='concept-edit-body'>
              <input type='text' id='concept-edit-body-title'
                value= {this.state.title}
                onChange={this.update('title')}
                placeholder='Title'/>
              <div id='concept-edit-body-buttons'>
              </div>

              <textarea id='concept-edit-body-description'
                value={this.state.description}
                onChange={this.update('description')}
                placeholder='Description'
                />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ConceptNewEdit;

// <input type='file' onChange={this.updateFile}></input>
// <img src={this.state.image_url}/>

// <div id='concept-edit-header'>
//     {this.renderUploadThumbnail()}
//   <div id='concept-edit-buttons'>
//     <button id='concept-edit-save'>
//       Save
//     </button>
//   </div>
// </div>
// <div id='concept-edit-body-img'>
//   <ul id='concept-edit-adding-container'>
//     {this.renderPreviousImages()}
//       {this.renderImageArray()}
//   </ul>
// </div>
