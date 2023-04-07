import React from 'react';
import './App.css';

import {
  Home, About
} from './container';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/> 

        </Routes>
    </div>
  );
}

export default App;
