import React from 'react';
import ReactDOM from 'react-dom';

class MakeItSearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      demoInputText: ""
    };
    this.finalDemoInputText = " Calculus ";
    this.simulateTyping = this.simulateTyping.bind(this);
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

  render(){
    return (
      <div id='make-it-search-bar'>
        Let's learn
        {this.state.demoInputText}
      </div>
    );
  }

};

export default MakeItSearchBar;
