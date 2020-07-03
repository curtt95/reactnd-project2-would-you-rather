import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from './LeaderBoardItem'
import { Header, Segment } from 'semantic-ui-react'

/**
 * Leaderboard Component
 */
class LeaderBoard extends Component {
    render() {
        return (
            <div className="container">
                <Header as='h5' attached='top'>
                    Leaderboard
                </Header>
                <Segment attached>
                    {/* Loop through sorted users and render Individual Leaderboard Item */}
                    {this.props.users.map((id, index) => (
                        <Fragment key={id}>
                            <LeaderBoardItem id={id} place={index + 1}/> {/* Render Leaderboard Item with a ranking */}
                        </Fragment>
                    ))}
                </Segment>
            </div>
        )
    }
}

/**
  * @description mapStateToProps function
  * @param {Object} from_store - Get data from store
  * @return {Object} props
  */
function mapStateToProps({ users }) {
    // Get all users from the store and sort desceding based on score where => Score = (number of questions asked) + (number of questions answered)
    const sortedusers = Object.keys(users).sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length))

    return {
        users: sortedusers //return sorted users
    }
}

export default connect(mapStateToProps)(LeaderBoard)