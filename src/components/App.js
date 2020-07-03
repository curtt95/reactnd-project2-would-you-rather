import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav';
import Home from './Home';
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import QuestionInfo from './QuestionInfo'
import LoadingBar from 'react-redux-loading'

/**
 * The authentication object
 */
export const auth = {
  isAuthenticated: false,

  // authenticate the user
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },

  // sign the user out
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

/**
  * @description Creates a private route
  * @param {Component} component - The existing component
  * @param ...rest - The rest of the parameters
  */
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
  /**
   * Gets all of the initial data
   */
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props // destructure props

    return (
        <Router>{/* Create new router in react-router-dom */}
          <div className="App">
            <LoadingBar /> {/* Show loading bar while loading */}
            <Nav/> {/* Top Nav */}
            {/* Switch statement for routes - react-router-dom */}
              <Switch>
                <PrivateRoute path='/' exact component={Home} authedUser={authedUser} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute path='/question/:id' component={QuestionInfo} authedUser={authedUser} />
                <PrivateRoute exact path='/add' component={NewQuestion} authedUser={authedUser} />
                <PrivateRoute exact path='/leaderboard' component={LeaderBoard} authedUser={authedUser} />
                <Route component={NotFound} /> {/* Show 404 Not Found page if not found */}
              </Switch>
          </div>
        </Router>
      )
    }
}

/**
  * @description mapStateToProps function
  * @param {Object} from_store - Get data from store
  * @return {Object} props
  */
function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);