import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Form } from 'semantic-ui-react'

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
        const { question } = this.props
        const { option } = this.state

        return (
            <div className="radio-toolbar">
                <Form onSubmit={this.handleSubmit}>
                    <b>Would You Rather...</b>
                    <Form.Radio
                        id="one"
                        label={question.optionOne.text}
                        value='one'
                        checked={option === "optionOne" ? true : false}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        id="two"
                        label={question.optionTwo.text}
                        value='two'
                        checked={option === "optionTwo" ? true : false}
                        onChange={this.handleChange}
                    />
                    <Form.Button disabled={option === null} fluid primary>
                        Vote
                    </Form.Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(_, { user, question, updateQuestion, id }) {
    return {
        id: id,
        question: question,
        user: user,
        updateQuestion: updateQuestion
    }
}

export default connect(mapStateToProps)(VoteQuestion)