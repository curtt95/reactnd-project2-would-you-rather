import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionResults1 extends Component {
    render() {
        const { question, authedUser } = this.props

        const votesOptionOne = question.optionOne.votes.length
        const votesOptionTwo = question.optionTwo.votes.length

        const totalvotes = votesOptionOne + votesOptionTwo
        const percentageOne = Math.round((votesOptionOne / totalvotes) * 100)
        const percentageTwo = Math.round((votesOptionTwo / totalvotes) * 100)

        return (
            <div className="row">
                <h5>Results:</h5>
                <div className={ question.optionOne.votes.includes(authedUser) ? 'col s6 question light-blue' : 'col s6 question' }>
                    <div className="card-content">
                        <p>Would you rather {question.optionOne.text}</p>
                        <b>Votes: {votesOptionOne}</b><br/>
                        <b>{percentageOne}%</b>
                        <div className="progress">
                            <div className="determinate light-blue" style={{width: percentageOne + "%"}}></div>
                        </div>
                    </div>
                </div>
                <div className={ question.optionTwo.votes.includes(authedUser) ? 'col s6 question light-blue' : 'col s6 question' }>
                    <div className="card-content">
                        <p>Would you rather {question.optionTwo.text}</p>
                        <b>Votes: {votesOptionTwo}</b><br/>
                        <b>{percentageTwo}%</b>
                        <div className="progress">
                            <div className="determinate light-blue" style={{width: percentageTwo + "%"}}></div>
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

export default connect(mapStateToProps)(QuestionResults1)