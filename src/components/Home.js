import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

/**
 * Home Page Component
 */
class Home extends Component {
    render() {
        return (
            <div className="container">
                <QuestionList /> {/* Render List of Questions */}
            </div>
        )
    }
}

export default connect()(Home)