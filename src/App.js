import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background overlay"></div>
        <header>
          <h1 className="app-name">
            DESTIN<br />
            <span className="pull"><i className="material-icons reverse">play_arrow</i></span>
            ATE
            </h1>
        </header>
        <main>
          <div className="twitter-form">
            <h4 className="main-twitter">WHAT IS YOUR TWITTER HANDLE?</h4>
            <input type="text" />
            <button className="twitter-form-submit"><i className="material-icons">play_arrow</i></button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
