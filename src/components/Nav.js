import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className="light-blue " role="navigation">
                { this.props.user !== undefined && 
                    <div className="nav-wrapper container">
                        <ul className="left hide-on-med-and-down">
                            <li>
                                <NavLink to='/' exact activeClassName='active'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/add' activeClassName='active'>
                                    New Question
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/leaderboard' activeClassName='active'>
                                    Leaderboard
                                </NavLink>
                            </li>
                        </ul>

                        <ul className="right hide-on-med-and-down">
                            { this.props.user !== undefined && 
                                <Fragment>
                                    {/**<li><img alt="avatar" src={this.props.user.avatarURL} className='avatar' /></li>*/}
                                    <li>Hello, {this.props.user.name}</li>
                                </Fragment>
                            }
                            <li>
                                <NavLink to='/logout' activeClassName='active'>
                                    Log out
                                </NavLink>
                            </li>
                        </ul>

                        <ul id="nav-mobile" className="sidenav">
                            <li></li>
                        </ul>
                        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    </div>
                }   
            </nav>
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