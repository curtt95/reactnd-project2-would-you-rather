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
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

export const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
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
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/question/:id' component={VoteQuestion} authedUser={authedUser} />
            <PrivateRoute exact path='/add' component={NewQuestion} authedUser={authedUser} />
            <PrivateRoute exact path='/leaderboard' component={LeaderBoard} authedUser={authedUser} />
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