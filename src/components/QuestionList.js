import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {
    state = {
        answered: false
    }

    handleClick = () => {
        if (this.state.answered) {
            this.setState({
                answered: false
            })
        } else {
            this.setState({
                answered: true
            })
        }
    }

    render() {
        const { answered } = this.state

        return (
            <div className="container">
                <button 
                    className="btn light-blue"
                    onClick={this.handleClick}>
                    Toggle Answered/Unanswered
                </button>
                <div>
                {answered ? 
                    <Fragment>
                        <h3>Answered Questions</h3>
                        <ul className=''>
                            {this.props.answeredquestions.map((id) => (
                                <li key={id}>
                                    <Question id={id} />
                                </li>
                            ))}
                        </ul>
                    </Fragment>
                    :
                    <Fragment>
                        <h3>Unanswered Questions</h3>
                        <ul className=''>
                            {this.props.unansweredquestions.map((id) => (
                                <li key={id}>
                                    <Question id={id} />
                                </li>
                            ))}
                        </ul>
                    </Fragment>
                }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    const answeredquestions = Object.keys(questions).filter((question) => questions[question].optionOne.votes.includes(authedUser) || questions[question].optionTwo.votes.includes(authedUser))
    const unansweredquestions = Object.keys(questions).filter((question) => !questions[question].optionOne.votes.includes(authedUser) && !questions[question].optionTwo.votes.includes(authedUser))

    return {
        answeredquestions: answeredquestions.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        unansweredquestions: unansweredquestions.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionList)