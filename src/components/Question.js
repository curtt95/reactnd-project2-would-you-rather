import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

class Question extends Component {
    render() {
        const { user, question } = this.props

        return (
            <Link to={`/question/${question.id}`} className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="title light-blue">
                            <b>{user.name} asks ...</b>
                        </div>
                        <div className="card-content">
                            <div className="row">
                                <div className="col s3 avatarparent">
                                    <Avatar user={user} />
                                </div>
                                <div className="col s9 question-text">
                                    <div>
                                        <p>{question.optionOne.text}</p>
                                        <p>OR</p>
                                        <p>{question.optionTwo.text}</p>
                                    </div>
                                </div>
                                <a href={`/question/${question.id}`} className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">arrow_forward</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

function mapStateToProps({ users, questions }, { id }) {
    const question =  questions[id]
    const user = users[question.author]

    return {
        question: question,
        user: user
    }
}

export default connect(mapStateToProps)(Question)