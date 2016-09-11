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
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
