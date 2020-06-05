import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Nav extends Component {
    render() {
        return (
            <nav className="light-blue " role="navigation">
                <div className="nav-wrapper container">
                <ul className="left hide-on-med-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New Question</a></li>
                    <li><a href="#">Leader Board</a></li>
                </ul>

                <ul className="right hide-on-med-and-down">
                    { this.props.user !== undefined && 
                        <Fragment>
                            <li><img alt="avatar" src={this.props.user.avatarURL} height='50' /></li>
                            <li>{this.props.user.name}</li>
                        </Fragment>
                    }
                    <li><a href="#">Log out</a></li>
                </ul>

                <ul id="nav-mobile" className="sidenav">
                    <li><a href="#">Navbar Link</a></li>
                </ul>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
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