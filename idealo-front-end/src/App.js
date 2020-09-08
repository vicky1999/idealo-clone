import React from 'react';
import Header from './components/Header';
import NavBar from './components/MenuBar';
import Trending from './components/Trending';
import Slides from './components/Slides';
import Popular from './components/Popular';
import Bargain from './components/Bargains';
import Flights from './components/Flights';
import About from './components/About';
import Verified from './components/Verified';
import Options from './components/Options';
import Bottom from './components/Bottom';

import './App.css';

import client from './Client';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header /> 
        <NavBar />
        <Trending />
        <Slides />
        <Popular />
        <Bargain />
        <Flights />  
        <About />  
        <Verified />  
        <Options />
        <Bottom />
      </div>
    </ApolloProvider>
  );
}

export default App;
