import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

/**
 * Question Results Component
 */
class QuestionResults extends Component {
    render() {
        const { question, authedUser } = this.props; // get props

        const votesOptionOne = question.optionOne.votes.length; // option 1 votes
        const votesOptionTwo = question.optionTwo.votes.length; // option 2 votes

        const totalvotes = votesOptionOne + votesOptionTwo; // total votes
        const percentageOne = Math.round((votesOptionOne / totalvotes) * 100); // % option 1
        const percentageTwo = Math.round((votesOptionTwo / totalvotes) * 100); // % option 2

        return (
            <Fragment>
                {/* Show results of question */}
                <h5>Results:</h5>
                <div className="column">
                    <div className="ui raised segment fluid">
                        {/* If user voted option 1 show label */}
                    { question.optionOne.votes.includes(authedUser)  && <div className="ui top right attached label blue">Your Answer</div> }
                        <p>Would you rather {question.optionOne.text}</p>
                        {/* Votes and percentages */}
                        <b>Votes: {votesOptionOne}</b><br/>
                        <b>{percentageOne}%</b>
                        <div className="progress">
                            <div className="determinate light-blue" style={{width: percentageOne + "%"}}></div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment fluid">
                        {/* If user voted option 2 show label */}
                    { question.optionTwo.votes.includes(authedUser)  && <div className="ui top right attached label blue">Your Answer</div> }
                        <p>Would you rather {question.optionTwo.text}</p>
                        {/* Votes and percentages */}
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

/**
  * @description mapStateToProps function
  * @param {Object} from_store - Get data from store
  * @param {Object} props - props
  */
function mapStateToProps({ authedUser }, { question, user }) {
    return {
        question: question,
        authedUser: authedUser,
        user: user
    };
}

export default connect(mapStateToProps)(QuestionResults)