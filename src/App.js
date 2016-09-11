import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>What is your Twitter Handle?</h3>
        <input type="text" />
        <button>Submit</button>
      </div>
    );
  }
}

export default App;
