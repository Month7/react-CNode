import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import HeaderNav from './component/header-nav.jsx'
import RootRouter from './router.js'

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
