import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import stickykit from 'sticky-kit/dist/sticky-kit';
import ImagesContainer from '../images/images_container';

class StepEdit extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.step;
    this.update = this.update.bind(this);
    this.submitStep = this.submitStep.bind(this);
    this.setupMathQuill = this.setupMathQuill.bind(this);
    this.handleInsertMath = this.handleInsertMath.bind(this);
    this.insertAtCaret = this.insertAtCaret.bind(this);
  }

  componentDidMount(){
    this.props.fetchStep(this.props.params.stepId);
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.step);
    this.setupMathQuill();
  }

  // runs the functions inside after every update of the page. NEVER setState in here
  componentDidUpdate(prevProps, prevState){
    this.setupMathQuill();
  }

  setupMathQuill(){
      var mathFieldSpan = document.getElementById('math-field');
      var latexSpan = document.getElementById('latex');
      var MQ = window.MathQuill.getInterface(2);
      var mathField = MQ.MathField(mathFieldSpan, {
        spaceBehavesLikeTab: true,
        handlers: {
          edit: function() {
            latexSpan.textContent = mathField.latex();
          }
        }
      });
  }

  handleInsertMath(e){
    e.preventDefault();
    let oldText = document.getElementById('concept-edit-body-description').value;
    var htmlElement = document.getElementById('latex').innerHTML;
    this.insertAtCaret('concept-edit-body-description', '\\(' + htmlElement + '\\)');
    this.setState({['body']: document.getElementById('concept-edit-body-description').value});
    var mathFieldSpan = document.getElementById('math-field');
  }


  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  submitStep(){
    this.props.updateStep(this.state);

  }

  renderMathField(){
    return(
      <div>
        <p>Type math here: <span id="math-field"></span></p>
        <span id="latex" hidden></span>
        <button
          onClick= {this.handleInsertMath}
          >Insert Math</button>
      </div>
    );
  }

  insertAtCaret(areaId, text) {
		var txtarea = document.getElementById(areaId);
		if (!txtarea) { return; }

		var scrollPos = txtarea.scrollTop;
		var strPos = 0;
		var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
			"ff" : (document.selection ? "ie" : false ) );
		if (br == "ie") {
			txtarea.focus();
			var range = document.selection.createRange();
			range.moveStart ('character', -txtarea.value.length);
			strPos = range.text.length;
		} else if (br == "ff") {
			strPos = txtarea.selectionStart;
		}

		var front = (txtarea.value).substring(0, strPos);
		var back = (txtarea.value).substring(strPos, txtarea.value.length);
		txtarea.value = front + text + back;
		strPos = strPos + text.length;
		if (br == "ie") {
			txtarea.focus();
			var ieRange = document.selection.createRange();
			ieRange.moveStart ('character', -txtarea.value.length);
			ieRange.moveStart ('character', strPos);
			ieRange.moveEnd ('character', 0);
			ieRange.select();
		} else if (br == "ff") {
			txtarea.selectionStart = strPos;
			txtarea.selectionEnd = strPos;
			txtarea.focus();
		}

		txtarea.scrollTop = scrollPos;
	}

  render(){
    if(!this.state) return null;

    return (
      <div>
        <script type="text/javascript" async src="/MathJax/MathJax.js?config=TeX-MML-AM_CHTML"></script>
        <div id='concept-edit-container'>
          <div id='concept-edit'>
            <ImagesContainer params={this.props.params}
                            submitStep = {this.submitStep}/>
            <div id='concept-edit-body'>
              <input type='text' id='concept-edit-body-title'
                value= {this.state.title}
                onChange={this.update('title')}
                placeholder={(this.props.errors && this.props.errors['title'])? `Title ${this.props.errors['title']}`:'Title'}
                />
              <div id='concept-edit-body-buttons'>
              </div>

              <textarea id='concept-edit-body-description'
                value={this.state.body}
                onChange={this.update('body')}
                placeholder= {(this.props.errors && this.props.errors['body']) ? `Step ${this.props.errors['body']}`:'Step'}
                />

              {this.renderMathField()}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default StepEdit;
