import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Header, Segment, Grid, Button } from 'semantic-ui-react'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState({
            optionOne: '',
            optionTwo: ''
        })
    }

    handleChange = (e) => {
        if (e.target.id === "optionOne") {
            this.setState({
                optionOne: e.target.value
            })
        } else {
            this.setState({
                optionTwo: e.target.value
            })
        }
    }

    render() {
        const { optionOne, optionTwo } = this.state

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
                            <form className='new-question' onSubmit={this.handleSubmit}>
                                <input
                                    placeholder="Enter your first option..."
                                    value={optionOne}
                                    onChange={this.handleChange}
                                    type='text'
                                    id="optionOne"
                                />
                                <span>OR</span>
                                <input
                                    placeholder="Enter your second option..."
                                    value={optionTwo}
                                    onChange={this.handleChange}
                                    type='text'
                                    id="optionTwo"
                                />
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