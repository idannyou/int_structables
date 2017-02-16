import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import ConceptIndexContainer from './concept/concept_index_container';
import MakeItSearchBar from './welcome/make_it_search_bar';


const App = ({children}) => {
  return (
    <div>

      <WelcomeContainer />
      { children }
      <div className='head-image'>
        <img id='head-image-img' src={window.headimage} />
        <MakeItSearchBar />
        
      </div>
      <ConceptIndexContainer />
    </div>
  );
};

export default App;
