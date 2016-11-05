import React, { Component } from 'react';
import Stories from './Stories.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to AsyncVoter </h2>
        </div>
      <Stories />
      </div>
    );
  }
}

export default App;
