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
      </div>
    );
  }
}

export default City;
