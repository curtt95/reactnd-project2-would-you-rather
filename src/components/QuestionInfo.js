import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import QuestionResults from './QuestionResults'
import VoteQuestion from './VoteQuestion'
import NotFound from './NotFound'
import { Header, Segment, Grid, Divider } from 'semantic-ui-react'

/**
 * Question Info Component
 */
class QuestionInfo extends Component {
    // set state
    state = {
        answered: this.props.authedUser.answers[this.props.id] !== undefined ? true : false // set answered or unanswered
    }

    /**
     * @description Update the question
     */
    updateQuestion = () => {
        this.setState({
            answered: true // set state answer as true
        });
    }

    render() {
        const { question, user, id } = this.props; // get the props

        // if question is undefined show 404
        if (question === undefined) {
            return <NotFound />
        }
        
        return(
            <div className="container">
                {/* Show Info about question */}
                <Header as='h5' attached='top'>
                    <b>{user.name} asks ...</b>
                </Header>
                <Segment attached>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                {/* Render Avatar */}
                                <Avatar user={user} />
                                <Divider vertical />
                            </Grid.Column>
                            <Grid.Column width={12}>
                                {/* if answered show results else show vote page */}
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

/**
  * @description mapStateToProps function
  * @param {Object} from_store - Get data from store
  * @return {Object} props
  */
function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props.match.params; // get id in url
    const question = questions[id]; // get question
    const user = question !== undefined ? users[question.author] : ''; // get user
    const authedUserobj = users[authedUser]; // get autheduser

    return { // return object
        question: question,
        user: user,
        id: id,
        authedUser: authedUserobj
    };
}

export default connect(mapStateToProps)(QuestionInfo)