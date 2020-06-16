import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoardItem extends Component {
    render() {
        const { item } = this.props

        return (
            <div className="question">
                <img
                    src={item.avatarURL}
                    alt={`Avatar of ${item.name}`}
                    className='avatar'
                />
                <div className='question-info'>
                    <div>
                        <span>{item.name}</span>
                        <p>Score: {item.questions.length + Object.keys(item.answers).length}</p>
                        <p>Number of questions: {item.questions.length}</p>
                        <p>Number of answers: {Object.keys(item.answers).length}</p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    const item = users[id]

    return {
        item: item
    }
}

export default connect(mapStateToProps)(LeaderBoardItem)