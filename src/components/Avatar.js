import React, { Component } from 'react'

/**
 * Show Avatar Component
 */
class Avatar extends Component {
    render() {
        /**
         * Return avatar image
         */
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