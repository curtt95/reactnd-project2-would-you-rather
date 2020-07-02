import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class QuestionResults extends Component {
    render() {
        const { question, authedUser } = this.props

        const votesOptionOne = question.optionOne.votes.length
        const votesOptionTwo = question.optionTwo.votes.length

        const totalvotes = votesOptionOne + votesOptionTwo
        const percentageOne = Math.round((votesOptionOne / totalvotes) * 100)
        const percentageTwo = Math.round((votesOptionTwo / totalvotes) * 100)

        return (
            <Fragment>
                <h5>Results:</h5>
                <div className="column">
                    <div className="ui raised segment fluid">
                    { question.optionOne.votes.includes(authedUser)  && <div className="ui top right attached label blue">Your Answer</div> }
                        <p>Would you rather {question.optionOne.text}</p>
                        <b>Votes: {votesOptionOne}</b><br/>
                        <b>{percentageOne}%</b>
                        <div className="progress">
                            <div className="determinate light-blue" style={{width: percentageOne + "%"}}></div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment fluid">
                    { question.optionTwo.votes.includes(authedUser)  && <div className="ui top right attached label blue">Your Answer</div> }
                        <p>Would you rather {question.optionTwo.text}</p>
                        <b>Votes: {votesOptionTwo}</b><br/>
                        <b>{percentageTwo}%</b>
                        <div className="progress">
                            <div className="determinate light-blue" style={{width: percentageTwo + "%"}}></div>
                        </div>
                    </div>
                </div>
            </Fragment>
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