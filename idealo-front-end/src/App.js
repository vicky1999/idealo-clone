import React from 'react';
import Header from './components/Header';
import NavBar from './components/MenuBar';
import Trending from './components/Trending';
import Slides from './components/Slides';
import Popular from './components/Popular';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> 
      <NavBar />
      <Trending />
      <Slides />
      <Popular />
    </div>
  );
}

export default App;
