import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState({
            optionOne: '',
            optionTwo: ''
        })
    }

    handleChange = (e) => {
        if (e.target.id === "optionOne") {
            this.setState({
                optionOne: e.target.value
            })
        } else {
            this.setState({
                optionTwo: e.target.value
            })
        }
    }

    render() {
        const { optionOne, optionTwo } = this.state

        return (
            <div className="new-question container">
                <div className="row">
                    <div className="col s12">
                        <div className="title">
                            New Question
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h3 className='center'>Would You Rather...</h3>
                        <form className='new-question' onSubmit={this.handleSubmit}>
                            <input
                                placeholder="Enter your first option..."
                                value={optionOne}
                                onChange={this.handleChange}
                                type='text'
                                id="optionOne"
                            />
                            <p>OR</p>
                            <input
                                placeholder="Enter your second option..."
                                value={optionTwo}
                                onChange={this.handleChange}
                                type='text'
                                id="optionTwo"
                            />
                            <button
                                className='btn'
                                type='submit'
                                disabled={optionOne === '' || optionTwo === ''}>
                                Ask Question
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion)