import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { auth } from './App'
import { handleLogOut } from '../actions/authedUser'
import { Menu } from 'semantic-ui-react'

/**
 * Top Navigation
 */
class Nav extends Component {
    state = { // set state
        activeItem: '' 
    }

    /**
     * @description Handle submission of form
     * @param {Event} e - the event 
     */
    handleSubmit = (e) => {
        e.preventDefault();
        
        const { dispatch } = this.props; // get dispatch from props

        dispatch(handleLogOut()); // dispatch log out

        auth.signout(); // sign out function
    }

    /**
     * @description Handle item click
     * @param {Event} e - the event 
     * @param {Object} - the name 
     */
    handleItemClick = (e, { name }) => {
        this.setState({ 
            activeItem: name // set state to name
        });
    }

    render() {
        const { activeItem } = this.state; // get state

        return (
            <div>
                {/* Menu to navigate between pages */}
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

                    {/* If user is logged in show the following */}
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

/**
  * @description mapStateToProps function
  * @param {Object} from_store - Get data from store
  */
function mapStateToProps({ users, authedUser }) {
    const user = users[authedUser]; // get user

    return {
        user: user // return user
    };
}

export default connect(mapStateToProps)(Nav)