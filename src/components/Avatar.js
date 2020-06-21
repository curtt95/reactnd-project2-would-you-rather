import React, { Component } from 'react'

class Avatar extends Component {
    render() {
        return (
            <div className="avatarDiv">
                <img
                    src={this.props.user.avatarURL}
                    alt={`Avatar of ${this.props.user.name}`}
                    className='avatar'
                />
            </div>
        )
    }
}

export default Avatar