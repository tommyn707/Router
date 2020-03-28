import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import Home from './components/Home';
import Word from './components/Word';
import Number from './components/Number';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/Home"/>
        <Word path="/:word" />
        <Number path="/:str/:color/:colorText"/>
      </Router>
    </div>
  );
}

export default App;