import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RootRouter from '../src/router';

class App extends Component {
  render() {
    return (
      <div className="App">
          <RootRouter />
      </div>
    );
  }
}

export default App;
