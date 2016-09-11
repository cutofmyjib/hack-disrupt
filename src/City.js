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
      <div>
        <h3>City: {this.state.city.info.city.name}</h3>
        <img src={`https://nomadlist.com/${this.state.city.media.image['1000']}`} />
        <ul>
          <li>Nightlife: {this.state.city.scores.nightlife * 100} %</li>
          <li>Places to work: {this.state.city.scores.places_to_work * 100} %</li>
          <li>Friendly to foreigners: {this.state.city.scores.friendly_to_foreigners * 100}%</li>
        </ul>
      </div>
    );
  }
}

export default City;
