import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/questions'

class VoteQuestion extends Component {
    state = {
        option: null
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        const { option } = this.state
        const { dispatch, id } = this.props

        dispatch(handleSaveQuestionAnswer(option, id))

        this.setState({
            option: null
        })
    }

    handleChange = (e) => {
        if (e.target.id === "one") {
            this.setState({
                option: "optionOne"
            })
        } else {
            this.setState({
                option: "optionTwo"
            })
        }
    }

    render() {
        const { user, question } = this.props
        const { option } = this.state

        return (
            <div className="container">
                <div className="question">
                    <img
                        src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='avatar'
                    />
                    <form className='question-info' onSubmit={this.handleSubmit}>
                        <span>{user.name} asks...</span>
                        <b>Would You Rather...</b>
                        <label>
                            <input 
                                type="radio" 
                                className="with-gap"
                                onChange={this.handleChange}
                                id="one"
                                checked={option === "optionOne" ? true : false} />
                            <span>{question.optionOne.text}</span>
                        </label>
                        <p>OR</p>
                        <label>
                            <input 
                                type="radio" 
                                className="with-gap"
                                onChange={this.handleChange}
                                id="two"
                                checked={option === "optionTwo" ? true : false} />
                            <span>{question.optionTwo.text}</span>
                        </label>
                        <button
                            className='btn'
                            type='submit'
                            disabled={option === null}>
                            Vote
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions }, props) {
    const { id } = props.match.params
    const question = questions[id]
    const user = users[question.author]

    return {
        question: question,
        user: user,
        id: id
    }
}

export default connect(mapStateToProps)(VoteQuestion)