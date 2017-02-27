import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import logo from '../logo.svg';
import '../css/App.css';



class App extends Component {
 
  componentDidMount(){
    
    //first actions initializations
    this.props.initialization();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.....123456789
        </p>
      </div>
    );
  }
}

export default connect(state => state, actions)(App);
