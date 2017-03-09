import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hashHistory} from 'react-router';

class MakeItSearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      demoInputText: ""
    };
    this.finalDemoInputText = " Calculus ";
    this.simulateTyping = this.simulateTyping.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.simulateTyping(0);
  }

  simulateTyping(n) {
    if (n > this.finalDemoInputText.length) return;
    this.setState({
      demoInputText: this.finalDemoInputText.slice(0, n)
    }, () => setTimeout(() => this.simulateTyping(n+1), 300)
    );
  }

  handleClick(field){
    // document.getElementById('searchbar').value = field;
    let url= `/${field}`;
    hashHistory.push(url);
  }

  render(){
    return (
      <div id='make-it-search-bar'>
        Let's learn
        {this.state.demoInputText}
        <div id='category-links'>
          <div onClick={() => this.handleClick('integral')}
            className='category-links-items'
            >
            Integrals
          </div>
          <div onClick={() => this.handleClick('derivative')}
            className='category-links-items'>
            Derivatives
          </div>
          <div onClick={() => this.handleClick('limit')}
            className='category-links-items'>
            Limits
          </div>

        </div>
      </div>
    );
  }

}

export default MakeItSearchBar;
