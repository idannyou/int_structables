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
    }, 1000);
  }

  search(e) {
    if (this.state.inputVal !== ''){
      this.props.fetchSpecificConcepts(this.state.inputVal).then(projects =>{
        this.setState({inputVal: ''});
        hashHistory.push("/search");
      });
    }
  }

  render(){
    return(
      <div className='searchbar-container'>
        <h1 className='searchbar-word'>let's learn:</h1>
        <input type="text"
          value={this.state.inputVal}
          onChange={this.handleInput}
          className="searchbar"
          placeholder="Type In Subject"
          />
      </div>
    );
  }
}
export default Search;
