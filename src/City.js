import React, { Component } from 'react';
import Cities from './cities.json';

class City extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    fetch(`http://104.236.130.173:4000/metrics?handle=${this.props.params.handle}`)
      .then((response) => response.json())
      .then((response) => {
        const name = response[0][1]
        const match = 1 - response[0][0]
        const city = Cities.result.find((data) => data.info.city.name === name)
        this.setState({ city: city, match: match })
      })
  }

  render() {
    if (this.state.city) {
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

      var safetystyle = {
        marginBottom: '25px',
        height: '8px',
        width: ''+ (this.state.city.scores.safety * 100) +'%',
        background: 'linear-gradient(135deg, rgba(5,197,255,1) 0%, rgba(86,139,255,1) 33%, rgba(226,38,255,1) 90%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#05c5ff", endColorstr="#e226ff", GradientType=1 )'
      }

      var freedomstyle = {
        marginBottom: '25px',
        height: '8px',
        width: ''+ (this.state.city.scores.freedom_score * 100) +'%',
        background: 'linear-gradient(135deg, rgba(5,197,255,1) 0%, rgba(86,139,255,1) 33%, rgba(226,38,255,1) 90%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#05c5ff", endColorstr="#e226ff", GradientType=1 )'
      }
    }


    const content = (!this.state.city) ? <div>Loading</div> : (
        <main className="main-city">
        <div className="city-name-div">
          <img src={"http://nomadlist.com"+this.state.city.media.image['1000']} />
          <h3 className="city-name">City: {this.state.city.info.city.name}</h3>
          <div className="city-stats">
          <div className="city-match">Match: {parseInt(this.state.match * 100)} %</div>
          <div>Nightlife: {this.state.city.scores.nightlife * 100} %</div>
          <div style={nightstyle}></div>
          <div>Places to work: {this.state.city.scores.places_to_work * 100} %</div>
          <div style={workstyle}></div>
          <div>Safety: {this.state.city.scores.safety * 100}%</div>
          <div style={safetystyle}></div>
          <div>Freedom: {this.state.city.scores.freedom_score * 100}%</div>
          <div style={freedomstyle}></div>
        </div>
        </div>
      </main>
      )

    return (
      <div className="App">
      <div className="secondary-header background overlay"></div>
      <header className="header-nav">
          <h1 className="app-name">DESTINATE</h1>
      </header>
        {content}
      </div>
    );
  }
}

export default City;
