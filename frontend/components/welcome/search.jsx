import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';

class Search extends React.Component{

  constructor(props){
    super(props);
    this.state = { inputVal: '' };
    this.search = this.search.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  handleInput(event) {
    this.setState({inputVal: event.target.value});
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.search();
      console.log('sent to server');
    }, 1000);
  }

  search(e) {
    this.props.fetchSpecificConcepts(this.state.inputVal).then(projects =>{
      hashHistory.push("/search");
    });
  }

  render(){
    return(
      <div>
        <input type="text"
          value={this.state.inputVal}
          onChange={this.handleInput}
          id="searchbar"/>
      </div>
    );
  }
}
export default Search;
