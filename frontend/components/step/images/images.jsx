import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import Dropzone from 'react-dropzone';


class Images extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      imageFileName: [],
      imageFileArray:[],
      imageFileUrl: []
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handlePropImgDelete = this.handlePropImgDelete.bind(this);
    this.handleImgDelete = this.handleImgDelete.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount(){
    if (this.props.params.stepId){
      this.props.fetchImages(`steps/${this.props.params.stepId}`).then(
        action => this.setState({images: action.images},()=>{})
      );
    }
  }

  onDrop(files) {
      let fileReader = new FileReader();
      let filesArray = [], filesName=[], filesUrl=[];
      files.forEach(
        (file)=>{
          if (!this.state.imageFileName.includes(file.name)){
            filesArray = this.state.imageFileArray;
            filesName = this.state.imageFileName;
            filesUrl = this.state.imageFileUrl;
            filesArray.push(file);
            filesName.push(file.name);
            filesUrl.push(file.preview);
          } else {
            filesArray = this.state.imageFileArray;
            filesName = this.state.imageFileName;
            filesUrl = this.state.imageFileUrl;
            alert(`${file.name} has already been inserted`);
          }}
      );
        this.setState({imageFileArray: filesArray},()=>{});
        this.setState({imageFileName: filesName},()=>{});
        this.setState({imageFileUrl: filesUrl},()=>{});
  }

  handleImgDelete(idx){
    let imageFileArray = this.state.imageFileArray;
    let imageFileName = this.state.imageFileName;
    let imageFileUrl = this.state.imageFileUrl;
    imageFileArray.splice(idx,1);
    imageFileName.splice(idx,1);
    imageFileUrl.splice(idx,1);
    this.setState({imageFileArray: imageFileArray},()=>{});
    this.setState({imageFileName: imageFileName},()=>{});
    this.setState({imageFileUrl: imageFileUrl},()=>{});
    return (e) => {
      e.preventDefault();
    };
  }

  handlePropImgDelete(idx){
    let innerProps = this.props.params;
    return (e) => {
      e.preventDefault();
      this.props.deleteImage(idx,`steps/${innerProps.stepId}`);
    };
  }

  renderUploadThumbnail(){
    return (
      <div>
        <Dropzone className='concept-edit-header-image'
          onDrop={this.onDrop}
          multiple= {true} >
          + Click or Drop to Add Images
        </Dropzone>
      </div>
    );
  }

  renderImageArray(){

    if (this.state.imageFileUrl.length > 0){
      return this.state.imageFileUrl.map((image_url, idx) => {
        return (
          <li id='concept-edit-adding'
            key={idx}>
            <button id='concept-edit-delete' onClick={()=>this.handleImgDelete(idx)}>
              X
            </button>
            <img id='concept-edit-img' src={image_url}/>
          </li>
        );
      });
    } else {
      return null;
    }
  }

  renderPropsImageArray(){

    if(!this.props.images) return null;
    let keyArray = Object.keys(this.props.images);
    if (keyArray.length > 0){
      return keyArray.map((imgKey) => {
        return (
          <li id='concept-edit-adding'
            key={imgKey}>
            <button id='concept-edit-delete' onClick={this.handlePropImgDelete(imgKey)}>
              X
            </button>
            <img id='concept-edit-img' src={this.props.images[imgKey].image_url}/>
          </li>
        );
      });
    } else {
      return null;
    }
  }

  handleSave(){
    let innerProps = this.props;
    let innerState = this.state;
    innerProps.submitStep();
    if (innerState.imageFileArray){
      innerState.imageFileArray.forEach((file) => {
        var formData = new FormData();
        formData.append('image', file);
        innerProps.createImage(formData, `steps/${innerProps.params.stepId}`);
      });
    }
    this.setState({imageFileName: []},()=>{});
    this.setState({imageFileArray: []},()=>{});
    this.setState({imageFileUrl: []},()=>{});
    document.getElementById('save-status').classList.remove('hidden');
    setTimeout(()=> document.getElementById('save-status').classList.add('hidden'), 2000);
  }

  handleBack(){
    let url = `concepts/${this.props.params.conceptId}/edit`;
    hashHistory.push(url);
  }


  render(){
    return(
      <div>
        <div id='concept-edit-header'>
          {this.renderUploadThumbnail()}
          <div id='concept-edit-buttons'>
            <button id='concept-edit-save'
                    onClick={this.handleSave}>
              Save
            </button>
            <button id='concept-edit-save'
                    onClick={this.handleBack}>
              Back
            </button>
            <div id='save-status' className='hidden'>Saved</div>
          </div>
        </div>
        <div id='concept-edit-body-img'>
          <ul id='concept-edit-adding-container'>
            {this.renderPropsImageArray()}
            {this.renderImageArray()}
          </ul>
        </div>
      </div>
    );

  }


}

export default Images;
