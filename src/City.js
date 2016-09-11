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
    var meterBg = {

    }

    var nightstyle = {
      marginBottom: '25px',
      height: '8px',
      width: ''+ (this.state.city.scores.nightlife * 100) +'%',
      background: 'linear-gradient(135deg, rgba(5,197,255,1) 0%, rgba(86,139,255,1) 33%, rgba(226,38,255,1) 90%)',
      filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#05c5ff", endColorstr="#e226ff", GradientType=1 )'
    }

    var workstyle = {
      marginBottom: '25px',
      height: '8px',
      width: ''+ (this.state.city.scores.places_to_work * 100) +'%',
      background: 'linear-gradient(135deg, rgba(5,197,255,1) 0%, rgba(86,139,255,1) 33%, rgba(226,38,255,1) 90%)',
      filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#05c5ff", endColorstr="#e226ff", GradientType=1 )'
    }

    var friendlystyle = {
      marginBottom: '25px',
      height: '8px',
      width: ''+ (this.state.city.scores.friendly_to_foreigners * 100) +'%',
      background: 'linear-gradient(135deg, rgba(5,197,255,1) 0%, rgba(86,139,255,1) 33%, rgba(226,38,255,1) 90%)',
      filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#05c5ff", endColorstr="#e226ff", GradientType=1 )'
    }

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
            <div className="city-stats">
            <div>Nightlife: {this.state.city.scores.nightlife * 100} %</div>
            <div style={nightstyle}></div>
            <div>Places to work: {this.state.city.scores.places_to_work * 100} %</div>
            <div style={workstyle}></div>
            <div>Friendly to foreigners: {this.state.city.scores.friendly_to_foreigners * 100}%</div>
            <div style={friendlystyle}></div>
          </div>
          </div>

        </main>
      </div>
    );
  }
}

export default City;
