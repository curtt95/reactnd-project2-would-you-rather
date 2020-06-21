import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class QuestionResults extends Component {
    render() {
        const { question, authedUser, user } = this.props

        const votesOptionOne = question.optionOne.votes.length
        const votesOptionTwo = question.optionTwo.votes.length

        const totalvotes = votesOptionOne + votesOptionTwo
        const percentageOne = Math.round((votesOptionOne / totalvotes) * 100)
        const percentageTwo = Math.round((votesOptionTwo / totalvotes) * 100)

        return (
            <div className="container">
                <div className="question">
                    
                        <span>Asked by {user.name}</span>
                        <Avatar user={user} />
                        <h5>Results:</h5>
                        <div className={ question.optionOne.votes.includes(authedUser) ? 'question answeredquestion' : 'question' }>
                            <div className="card-content">
                                <p>Would you rather {question.optionOne.text}</p>
                                <b>Votes: {votesOptionOne}</b><br/>
                                <b>{percentageOne}%</b>
                            </div>
                        </div>
                        <div className={ question.optionTwo.votes.includes(authedUser) ? 'question answeredquestion' : 'question' }>
                            <div className="card-content">
                                <p>Would you rather {question.optionTwo.text}</p>
                                <b>Votes: {votesOptionTwo}</b><br/>
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