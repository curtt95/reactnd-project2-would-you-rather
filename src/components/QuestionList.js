import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Menu, Segment } from 'semantic-ui-react'

/**
 * Question List Component
 */
class QuestionList extends Component {
    // set state
    state = {
        activeItem: 'unanswered' // default unanswered
    }

    /**
     * @description Switch between answered and unanswered
     * @param {Event} e - the event 
     * @param {Object} name - the name 
     */
    handleClick = (e, { name }) => {
        this.setState({
            activeItem: name // set state to name
        })
    }

    render() {
        const { activeItem } = this.state // get item

        return (
            <Fragment>
                {/* Menu to switch between unanswered and answered */}
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

                {/*If answered then show list of unanswered questions else show answered */}
                { activeItem === "unanswered" ? 
                    <Segment>
                        {/*If list if bigger than 0 show list of questions else show text no questions */}
                        {this.props.unansweredquestions.length > 0 ? 
                            this.props.unansweredquestions.map((id) => (
                                <Fragment key={id}>
                                    <Question id={id} answered={false}/>
                                    <br/>
                                </Fragment>
                            ))
                            :
                            <span>You have no unanswered questions...</span>
                        }
                    </Segment>
                    :
                    <Segment>
                        {/*If list if bigger than 0 show list of questions else show text no questions */}
                        {this.props.answeredquestions.length > 0 ? 
                            this.props.answeredquestions.map((id) => (
                                <Fragment key={id}>
                                    <Question id={id} answered={true}/>
                                    <br/>
                                </Fragment>
                            ))
                            :
                            <span>You have no answered questions...</span>
                        }
                    </Segment>
                }
            </Fragment>
        )
    }
}

/**
  * @description mapStateToProps function
  * @param {Object} from_store - Get data from store
  */
function mapStateToProps({ authedUser, questions }) {
    const answeredquestions = Object.keys(questions).filter((question) => questions[question].optionOne.votes.includes(authedUser) || questions[question].optionTwo.votes.includes(authedUser)) // filter answered questions
    const unansweredquestions = Object.keys(questions).filter((question) => !questions[question].optionOne.votes.includes(authedUser) && !questions[question].optionTwo.votes.includes(authedUser)) // filter unanswered questions

    return {
        answeredquestions: answeredquestions.sort((a,b) => questions[b].timestamp - questions[a].timestamp), // sort by newest first
        unansweredquestions: unansweredquestions.sort((a,b) => questions[b].timestamp - questions[a].timestamp) // sort by newest first
    }
}

export default connect(mapStateToProps)(QuestionList)