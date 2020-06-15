import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import { handleSetAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { auth } from './App'

class Login extends Component {
    state = {
        user: '',
        redirectToReferrer: false
    }

    isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { user } = this.state
        const { dispatch } = this.props

        if (user !== '') {
            dispatch(handleSetAuthedUser(user))

            auth.authenticate(() => {
                this.setState(() => ({
                    redirectToReferrer: true
                }))
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            user: e.target.value
        })
    }

    render() {
        const { users } = this.props
        const { user, redirectToReferrer } = this.state
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        if (this.isEmpty(users)) {
            return <Loading />
        } 

        return (
            <div className="container">
                <h3>Login</h3>
                <form className='login' onSubmit={this.handleSubmit}>
                    <select 
                        id="userslist"
                        style={{display: "inline"}}
                        value={user}
                        onChange={this.handleChange}
                        >
                        <option key="1"></option>
                        {Object.keys(users).map((user) => (
                            <option key={users[user].id}>{users[user].name}</option>
                        ))}
                    </select>
                    <br/>
                    <button
                        className='btn'
                        type='submit'>
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: users
    }
}

export default connect(mapStateToProps)(Login)