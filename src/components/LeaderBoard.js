import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from './LeaderBoardItem'

class LeaderBoard extends Component {
    render() {
        return (
            <div className="container">
                <ul className='dashboard-list'>
                    {this.props.users.map((id) => (
                        <li key={id}>
                            <LeaderBoardItem id={id} />
                        </li>
                    ))}
                </ul>
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