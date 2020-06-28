import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { auth } from './App'
import { handleLogOut } from '../actions/authedUser'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
    state = { 
        activeItem: '' 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const { dispatch } = this.props

        dispatch(handleLogOut())

        auth.signout()
    }

    handleItemClick = (e, { name }) => {
        this.setState({ 
            activeItem: name 
        })
    }

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        name='home'
                        as={NavLink}
                        to='/'
                        exact
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='new question'
                        as={NavLink}
                        to='/add'
                        active={activeItem === 'new question'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='leaderboard'
                        as={NavLink}
                        to='/leaderboard'
                        active={activeItem === 'leaderboard'}
                        onClick={this.handleItemClick}
                    />

                    { this.props.user !== undefined && 
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <span>
                                    Hello, {this.props.user.name}
                                </span>
                            </Menu.Item>
                            <Menu.Item
                                name='logout'
                                active={activeItem === 'logout'}
                                onClick={this.handleSubmit}
                            />
                        </Menu.Menu>
                    }
                </Menu>
            </div>         
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    const user = users[authedUser]

    return {
        user: user
    }
}

export default connect(mapStateToProps)(Nav)