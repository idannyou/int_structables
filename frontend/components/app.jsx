import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import Footer from './welcome/footer_bar';



const App = (props) => {
  return (
    <div>
      <WelcomeContainer pathname={props.location.pathname}/>
      { props.children }
      <Footer />
    </div>
  );
};

export default App;
