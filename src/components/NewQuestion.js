import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
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

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const { optionOne, optionTwo } = this.state

        return (
            <div>
                <h3 className='center'>Compose new Question</h3>
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
                        placeholder="Enter your first option..."
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
        )
    }
}

function mapStateToProps() {
    return {

    }
}

export default connect(mapStateToProps)(NewQuestion)