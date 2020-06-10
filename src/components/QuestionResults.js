import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionResults extends Component {
    render() {
        const { question, authedUser, user } = this.props

        const totalvotes = question.optionOne.votes.length + question.optionTwo.votes.length
        const percentageOne = (question.optionOne.votes.length / totalvotes) * 100
        const percentageTwo = (question.optionTwo.votes.length / totalvotes) * 100

        return (
            <div className="container">
                <div className="question">
                    <img
                        src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='avatar'
                    />
                        <span>Asked by {user.name}</span>
                        <div className={ question.optionOne.votes.includes(authedUser) ? 'card answeredquestion' : 'card' }>
                            <div className="card-content">
                                <p>Would you rather {question.optionOne.text}</p>
                                <b>{percentageOne}%</b>
                            </div>
                        </div>
                        <div className={ question.optionTwo.votes.includes(authedUser) ? 'card answeredquestion' : 'card' }>
                            <div className="card-content">
                                <p>Would you rather {question.optionTwo.text}</p>
                                <b>{percentageTwo}%</b>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }, { question, user }) {
    return {
        question: question,
        authedUser: authedUser,
        user: user
    }
}

export default connect(mapStateToProps)(QuestionResults)