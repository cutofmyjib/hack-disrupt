import React, { Component } from 'react';
import Cities from './cities.json';

class Gradient extends Component {
    render() {
        var stl = {width: parseInt(this.props.pct)}
        var data = (
            <div>
                <p>{this.props.name}</p>
                <div style={stl} className="meter"></div>
            </div>
        );
        return data;
    }
}

class City extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: Cities.result[this.props.params.num]
    }
  }

  render() {

    var props = [
        <Gradient key="Nightlife" name="Nightlife" pct="70" />,
        <Gradient key="Places to work" name="Places to work" pct="30" />,
        <Gradient key="Friendly to foreigners" name="Friendly to foreigners" pct="70" />,
    ];

    return (
      <div className="App">
      <div className="secondary-header background overlay"></div>
      <header className="header-nav">
          <h1 className="app-name">DESTINATE</h1>
      </header>
        <main className="main-city">
          <div className="city-name-div">
            <img src={"http://nomadlist.com"+this.state.city.media.image['1000']} />
            <h3 className="city-name">City: {this.state.city.info.city.name}</h3>
            <div className="city-stats">
            <div>
                { props }
            </div>
          </div>
          </div>
        </main>
      </div>
    );
  }
}

export default City;
