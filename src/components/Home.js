import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <QuestionList />
            </div>
        )
    }
}

export default connect()(Home)