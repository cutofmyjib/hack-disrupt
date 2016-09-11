import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background overlay"></div>
        <header>
          <h1 className="app-name">DESTINATE</h1>
        </header>
        <main>
          <div className="twitter-form">
            <h4 className="main-twitter">WHAT IS YOUR TWITTER HANDLE?</h4>
            <input type="text" />
            <button>Submit</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
