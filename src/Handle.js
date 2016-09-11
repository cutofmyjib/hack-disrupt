import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Handle extends Component {
  constructor(props, context) {
    super(props);
    this.state = { handle: '' };
  }
  change(e) {
    this.setState({ handle: e.target.value });
  }
  hash() {
    var hash = 0, i, chr, len;
    if (this.state.handle.length === 0) return hash;
    for (i = 0, len = this.state.handle.length; i < len; i++) {
      chr   = this.state.handle.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return Math.abs(hash) % 720;
  }
  submit() {
    browserHistory.push(`/city/${this.hash()}`)
  }
  render() {
    return (
      <div className="twitter-form">
        <h4 className="main-twitter">WHAT IS YOUR TWITTER HANDLE?</h4>
        <input type="text" onChange={(e) => this.change(e)} value={this.state.handle} />
        <button onClick={() => this.submit()} className="twitter-form-submit"><i className="material-icons">play_arrow</i></button>
      </div>
    );
  }
}

export default Handle;
