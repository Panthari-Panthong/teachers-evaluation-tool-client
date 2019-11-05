import React from 'react';
import { Route } from 'react-router-dom'
import BatchesListContainer from './components/BatchesListContainer'
import BatchDetailsContainer from './components/BatchDetailsContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/batches" exact component={BatchesListContainer} />
        <Route path="/batches/:id" exact component={BatchDetailsContainer} />
      </header>
    </div>
  );
}

export default App;
