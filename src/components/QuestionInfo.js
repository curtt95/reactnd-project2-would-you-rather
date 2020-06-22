import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import QuestionResults1 from './QuestionResults'
import VoteQuestion1 from './VoteQuestion'

class QuestionInfo extends Component {
    state = {
        answered: this.props.authedUser.answers[this.props.id] !== undefined ? true : false
    }

    updateQuestion = () => {
        this.setState({
            answered: true
        })
    }

    render() {
        const { question, user, id } = this.props
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="title light-blue">
                                <b>Asked By... {user.name}</b>
                            </div>
                            <div className="card-content">
                                <div className="row">
                                    <div className="col s3 avatarparent">
                                        <Avatar user={user} />
                                    </div>
                                    <div className="col s9 question-text">
                                        { this.state.answered
                                            ? <QuestionResults1 question={question} user={user}/>
                                            : <VoteQuestion1 question={question} user={user} id={id} updateQuestion={this.updateQuestion}/>
                                        }
                                    </div>
                                </div> 
                            </div>
                        </div>  
                    </div> 
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props.match.params
    const question = questions[id]
    const user = users[question.author]
    const authedUserobj = users[authedUser]

    return {
        question: question,
        user: user,
        id: id,
        authedUser: authedUserobj
    }
}

export default connect(mapStateToProps)(QuestionInfo)