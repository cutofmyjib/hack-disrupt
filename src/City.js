import React, { Component } from 'react';
import Cities from './cities.json';

class City extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: Cities.result[this.props.params.num]
    }
  }

  render() {
    return (
      <div className="App">
      <div className="secondary-header background overlay"></div>
      <header className="header-nav">
          <h1 className="app-name">
            DESTIN<br />
            <span className="pull"><i className="material-icons reverse">play_arrow</i></span>
            ATE
            </h1>
        </header>
        <main className="main-city">
          <div className="city-name-div">
            <img src={"http://nomadlist.com"+this.state.city.media.image['1000']} />
            <h3 className="city-name">City: {this.state.city.info.city.name}</h3>
          </div>
          <div className="city-stats"></div>
        </main>
      </div>
    );
  }
}

export default City;
