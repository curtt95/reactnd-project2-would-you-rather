import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import { handleSetAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { auth } from './App'
import { Button, Header, Segment, Grid } from 'semantic-ui-react';

/**
 * Login component
 */
class Login extends Component {
    // set the initial state
    state = {
        user: '-- Please Select --',
        redirectToReferrer: false // to redirect after authentication
    }

    /**
     * @description Is the object empty?
     * @param {Object} obj - the object
     * @return {bool} 
     */
    isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    /**
     * @description Handle submission of form
     * @param {Event} e - the event 
     */
    handleSubmit = (e) => {
        e.preventDefault();

        const { user } = this.state; // get user from state
        const { dispatch } = this.props; // get dispatch from props

        if (user !== '-- Please Select --') { // if user selected
            dispatch(handleSetAuthedUser(user)); // dispatch set auth user

            auth.authenticate(() => { // call authenticate function and redirect
                this.setState(() => ({
                    redirectToReferrer: true
                }));
            });
        }
    }

    /**
     * @description Handle change of form
     * @param {Event} e - the event 
     */
    handleChange = (e) => {
        this.setState({
            user: e.target.value // set state to user
        });
    }

    render() {
        const { users } = this.props; // get our props
        const { user, redirectToReferrer } = this.state; //  get our state
        const { from } = this.props.location.state || { from: { pathname: '/' } }; // get history so we can redirect

        // if authed redirect to existing page
        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        // Show loading component whilst loading
        if (this.isEmpty(users)) {
            return <Loading />
        } 

        return (
            <div className="container">
                <Header as='h5' attached='top'>
                    Login
                </Header>
                <Segment attached>
                    <Header size='large'>Would You Rather</Header>
                    <span>Please sign in to play...</span>
                    <Grid divided>
                        <Grid.Row>
                            <Grid.Column>
                                {/* Select user form */}
                                <img src="logo192.png" alt="logo" />
                                <form className='login' onSubmit={this.handleSubmit}>
                                    <select 
                                        id="userslist"
                                        style={{display: "inline"}}
                                        value={user}
                                        onChange={this.handleChange}
                                        >
                                        <option key="1">-- Please Select --</option>
                                        {/* Loop through users and display name in dropdown */}
                                        {Object.keys(users).map((user) => (
                                            <option key={users[user].id}>{users[user].name}</option>
                                        ))}
                                    </select>
                                    <br/><br/>
                                    <Button primary type="submit">Login</Button> {/* Submit form */}
                                </form>
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
function mapStateToProps({ users }) {
    return {
        users: users // return users
    };
}

export default connect(mapStateToProps)(Login)