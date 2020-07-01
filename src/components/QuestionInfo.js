import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import QuestionResults from './QuestionResults'
import VoteQuestion from './VoteQuestion'
import NotFound from './NotFound'
import { Header, Segment, Grid, Divider } from 'semantic-ui-react'

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

        if (question === undefined) {
            return <NotFound />
        }
        
        return(
            <div className="container">
                <Header as='h5' attached='top'>
                    <b>{user.name} asks ...</b>
                </Header>
                <Segment attached>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Avatar user={user} />
                                <Divider vertical />
                            </Grid.Column>
                            <Grid.Column width={12}>
                                { this.state.answered
                                    ? <QuestionResults question={question} user={user}/>
                                    : <VoteQuestion question={question} user={user} id={id} updateQuestion={this.updateQuestion}/>
                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props.match.params
    const question = questions[id]
    const user = question !== undefined ? users[question.author] : ''
    const authedUserobj = users[authedUser]

    return {
        question: question,
        user: user,
        id: id,
        authedUser: authedUserobj
    }
}

export default connect(mapStateToProps)(QuestionInfo)