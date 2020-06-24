import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'

class VoteQuestion extends Component {
    state = {
        option: null
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        const { option } = this.state
        const { dispatch, id } = this.props

        dispatch(handleSaveQuestionAnswer(option, id))

        this.props.updateQuestion()
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
            <div className="row">
                <div className="col s12">
                    <form className='question-info' onSubmit={this.handleSubmit}>
                        <span>{user.name} asks...</span>
                        <b>Would You Rather...</b>
                        <label>
                            <input 
                                type="radio" 
                                className="with-gap light-blue"
                                onChange={this.handleChange}
                                id="one"
                                checked={option === "optionOne" ? true : false} />
                            <span>{question.optionOne.text}</span>
                        </label>
                        <p>OR</p>
                        <label>
                            <input 
                                type="radio" 
                                className="with-gap light-blue"
                                onChange={this.handleChange}
                                id="two"
                                checked={option === "optionTwo" ? true : false} />
                            <span>{question.optionTwo.text}</span>
                        </label>
                        <button
                            className='btn light-blue'
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

function mapStateToProps({}, { user, question, updateQuestion, id }) {
    return {
        id: id,
        question: question,
        user: user,
        updateQuestion: updateQuestion
    }
}

export default connect(mapStateToProps)(VoteQuestion)