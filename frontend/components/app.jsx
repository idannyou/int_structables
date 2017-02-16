import React from 'react';
import WelcomeContainer from './welcome/welcome_container';



const App = ({children}) => {
  return (
    <div>
      <WelcomeContainer />
      { children }
    </div>
  );
};

export default App;
