import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Form } from 'semantic-ui-react'

/**
 * Vote Question Component
 */
class VoteQuestion extends Component {
    state = {
        option: null // set state option as null
    }
    
    /**
     * @description Handle submission of form
     * @param {Event} e - the event 
     */
    handleSubmit = (e) => {
        e.preventDefault();

        const { option } = this.state; // get option
        const { dispatch, id } = this.props; // get props

        dispatch(handleSaveQuestionAnswer(option, id)); // dispatch save answer

        this.props.updateQuestion(); // call updateQuestion from props
    }

    /**
     * @description Handle change of form
     * @param {Event} e - the event 
     */
    handleChange = (e) => {
        if (e.target.id === "one") {
            this.setState({
                option: "optionOne" // set state
            });
        } else {
            this.setState({
                option: "optionTwo"
            });
        }
    }

    render() {
        const { question } = this.props;
        const { option } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                {/* Form to vote for a question */}
                <h5>Would You Rather...</h5>
                {/* Radio Option 1 */}
                <Form.Radio
                    className="ui raised segment fluid"
                    id="one"
                    label={question.optionOne.text}
                    value='one'
                    checked={option === "optionOne" ? true : false}
                    onChange={this.handleChange}
                />
                {/* Radio Option 2 */}
                <Form.Radio
                    className="ui raised segment fluid"
                    id="two"
                    label={question.optionTwo.text}
                    value='two'
                    checked={option === "optionTwo" ? true : false}
                    onChange={this.handleChange}
                />
                {/* Submit */}
                <Form.Button disabled={option === null} fluid primary>
                    Vote
                </Form.Button>
            </Form>
        )
    }
}

/**
  * @description mapStateToProps function
  * @param {Object} from_store - Get data from store
  * @return {Object} props
  */
function mapStateToProps(_, { user, question, updateQuestion, id }) {
    return {
        id: id,
        question: question,
        user: user,
        updateQuestion: updateQuestion
    };
}

export default connect(mapStateToProps)(VoteQuestion)