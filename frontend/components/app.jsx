import React from 'react';
import WelcomeContainer from './welcome/welcome_container';

const App = ({children}) => {
  return (
    <div>
      <h2>intStructables</h2>
      <WelcomeContainer />
      { children }
      <img src={window.headimage} />
    </div>
  );
};

export default App;
