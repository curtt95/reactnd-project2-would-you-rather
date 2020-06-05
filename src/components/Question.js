import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        const { question } = this.props

        return (
            <div>
                {question.author}
            </div>
        )
    }
}

function mapStateToProps({ questions }, { id }) {
    const question =  questions[id]

    return {
        question: question
    }
}

export default connect(mapStateToProps)(Question)