import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav';
import Home from './Home';
import VoteQuestion from './VoteQuestion'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    props.authedUser === null
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props

    return (
        <Router>
          <div className="App">
            <Nav/>
            <PrivateRoute path='/' exact component={Home} authedUser={authedUser} />
            <Route path='/login' exact component={Login} />
            <PrivateRoute path='/question/:id' component={VoteQuestion} authedUser={authedUser} />
            <PrivateRoute path='/add' component={NewQuestion} authedUser={authedUser} />
            <PrivateRoute path='/leaderboard' component={LeaderBoard} authedUser={authedUser} />
          </div>
        </Router>
      )
    }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(App);