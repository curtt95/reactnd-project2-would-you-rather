import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import { Grid, Header, Segment, Divider, Button } from 'semantic-ui-react'

class Question extends Component {
    render() {
        const { user, question, answered } = this.props

        return (
            <Link to={`/question/${question.id}`}>
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
                                <div>
                                    <p>{question.optionOne.text}</p>
                                    <p>OR...</p>
                                </div>
                                <Button fluid primary>
                                    { answered ? 'View Results' : 'Vote' }
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Link>
        )
    }
}

function mapStateToProps({ users, questions }, { id, answered }) {
    const question =  questions[id]
    const user = users[question.author]

    return {
        question: question,
        user: user
    }
}

export default connect(mapStateToProps)(Question)