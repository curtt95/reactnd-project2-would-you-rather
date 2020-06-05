import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav';
import Home from './Home';
import Question from './Question'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
        return (
          <Router>
            <div className="App">
              <Nav/>
              <Route path='/' exact component={Home} />
              <Route path='/question/:id' component={Question} />
              <Route path='/new' component={NewQuestion} />
              <Route path='/leaderboard' component={LeaderBoard} />
            </div>
          </Router>
      )
    }
}

export default connect()(App);
