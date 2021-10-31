import React from 'react';
import MainVideo from './components/MainVideo';
import SuggestionVideo from './components/SuggestionVideo';

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="row">
      <MainVideo />
      <div class="col">
      <SuggestionVideo />
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
