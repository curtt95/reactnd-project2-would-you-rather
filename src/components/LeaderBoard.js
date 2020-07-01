import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from './LeaderBoardItem'
import { Header, Segment } from 'semantic-ui-react'

class LeaderBoard extends Component {
    render() {
        return (
            <div className="container">
                <Header as='h5' attached='top'>
                    Leaderboard
                </Header>
                <Segment attached>
                    {this.props.users.map((id) => (
                        <Fragment key={id}>
                            <LeaderBoardItem id={id} />
                        </Fragment>
                    ))}
                </Segment>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const sortedusers = Object.keys(users).sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length))

    return {
        users: sortedusers
    }
}

export default connect(mapStateToProps)(LeaderBoard)