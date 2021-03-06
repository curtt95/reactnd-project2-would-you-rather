import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Header, Segment, Grid, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    /**
     * @description Handle submission of form
     * @param {Event} e - the event 
     */
    handleSubmit = (e) => {
        e.preventDefault();

        const { optionOne, optionTwo } = this.state; // get options from state
        const { dispatch, id } = this.props; // get dispatch and id from props

        dispatch(handleAddQuestion(optionOne, optionTwo)); // dispatch handle add question

        this.setState({
            optionOne: '',
            optionTwo: '',
            toHome: id ? false : true // if id is set false else true
        });
    }

    /**
     * @description Handle change of form
     * @param {Event} e - the event 
     */
    handleChange = (e) => {
        if (e.target.id === "optionOne") {
            this.setState({
                optionOne: e.target.value // set state
            });
        } else {
            this.setState({
                optionTwo: e.target.value
            });
        }
    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state; // get options from state

        if (toHome === true) { // if submitted return home
            return <Redirect to='/' />
        }

        return (
            <div className="container">
                <Header as='h5' attached='top'>
                    Create New Question
                </Header>
                <Segment attached>
                    <Grid divided>
                        <Grid.Row>
                            <Grid.Column>
                            <Header as='h4'>
                                Would You Rather...
                            </Header>
                            {/* Form to create new question */}
                            <form className='new-question' onSubmit={this.handleSubmit}>
                                {/* Option One */}
                                <input
                                    placeholder="Enter your first option..."
                                    value={optionOne}
                                    onChange={this.handleChange}
                                    type='text'
                                    id="optionOne"
                                />
                                <span>OR</span>
                                {/* Option Two */}
                                <input
                                    placeholder="Enter your second option..."
                                    value={optionTwo}
                                    onChange={this.handleChange}
                                    type='text'
                                    id="optionTwo"
                                />
                                {/* Submit */}
                                <Button 
                                    disabled={optionOne === '' || optionTwo === ''}
                                    primary>
                                    Ask Question
                                </Button>
                            </form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default connect()(NewQuestion)