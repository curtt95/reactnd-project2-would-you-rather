import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {
    render() {
        const { user, question } = this.props

        return (
            <Link to={`/question/${question.id}`} className="question">
                <img
                    src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                    className='avatar'
                />
                <div className='question-info'>
                    <div>
                        <span>{user.name} asks ...</span>
                        <p>{question.optionOne.text}</p>
                        <p>OR</p>
                        <p>{question.optionTwo.text}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

function mapStateToProps({ users, questions }, { id }) {
    const question =  questions[id]
    const user = users[question.author]

    return {
        question: question,
        user: user
    }
}

export default connect(mapStateToProps)(Question)