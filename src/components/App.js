import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav';
import Home from './Home';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
        return (
        <div className="App">
          <Nav/>
          <Home/>
        </div>
      )
    }
}

export default connect()(App);
