import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import stickykit from 'sticky-kit/dist/sticky-kit';

class ConceptNewEdit extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.concept;
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    if (this.props.params.conceptId){
      this.props.fetchConcept(this.props.params.conceptId);
    }
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.concept);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render(){
    if(!this.state) return null;
    return (
      <div id='concept-edit-container'>
        <div id='concept-edit'>
          <div id='concept-edit-header'>
            <div id='concept-edit-header-image'>
              + Click To Add Images
            </div>
            <div id='concept-edit-buttons'>
              BUTTONS GO HERE
            </div>
          </div>

          <div id='concept-edit-body'>
            <div id='concept-edit-body-img'>
              DROP IMAGES HERE
            </div>
            <input type='text' id='concept-edit-body-title'
              value= {this.state.title}
              onChange={this.update('title')}
              />
            <div id='concept-edit-body-buttons'>
              BUTTONS GO HERE
            </div>

              <textarea id='concept-edit-body-description'
                value={this.state.description}
                onChange={this.update('description')}
                />
          </div>
        </div>
      </div>
    );
  }

}

export default ConceptNewEdit;
