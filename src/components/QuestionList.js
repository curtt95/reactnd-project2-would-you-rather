import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Menu, Segment } from 'semantic-ui-react'

class QuestionList extends Component {
    state = {
        activeItem: 'unanswered'
    }

    handleClick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
    }

    render() {
        const { activeItem } = this.state

        return (
            <Fragment>
                <Menu pointing>
                    <Menu.Item
                        name='unanswered'
                        active={activeItem === 'unanswered'}
                        onClick={this.handleClick}
                    />
                    <Menu.Item
                        name='answered'
                        active={activeItem === 'answered'}
                        onClick={this.handleClick}
                    />
                </Menu>

                { activeItem === "unanswered" ? 
                    <Segment>
                        {this.props.unansweredquestions.map((id) => (
                            <Fragment key={id}>
                                <Question id={id} answered={false}/>
                                <br/>
                            </Fragment>
                        ))}
                    </Segment>
                    :
                    <Segment>
                        {this.props.answeredquestions.map((id) => (
                            <Fragment key={id}>
                                <Question id={id} answered={true}/>
                                <br/>
                            </Fragment>
                        ))}
                    </Segment>
                }
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    const answeredquestions = Object.keys(questions).filter((question) => questions[question].optionOne.votes.includes(authedUser) || questions[question].optionTwo.votes.includes(authedUser))
    const unansweredquestions = Object.keys(questions).filter((question) => !questions[question].optionOne.votes.includes(authedUser) && !questions[question].optionTwo.votes.includes(authedUser))

    return {
        answeredquestions: answeredquestions.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        unansweredquestions: unansweredquestions.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionList)