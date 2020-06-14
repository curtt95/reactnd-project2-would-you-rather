import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import { handleSetAuthedUser } from '../actions/authedUser'

class Login extends Component {
    state = {
        user: 'Tyler McGinnis'
    }

    isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { user } = this.state
        const { dispatch } = this.props

        dispatch(handleSetAuthedUser("tylermcginnis")) // TODO
    }

    handleChange = (e) => {
        this.setState({
            user: e.target.value
        })
    }

    render() {
        const { users } = this.props
        const { user } = this.state

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
                        {Object.keys(users).map((user) => (
                            <option key={users[user].id}>{users[user].name}</option>
                        ))}
                    </select>
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