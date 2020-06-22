import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import Score from './Score'

class LeaderBoardItem extends Component {
    render() {
        const { item } = this.props

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="title light-blue">
                                <b>{item.name}</b>
                            </div>
                            <a className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">looks_one</i></a>
                            <div className="card-content">
                                <div className="row">
                                    <div className="col s3 avatarparent">
                                        <Avatar user={item} />
                                    </div>
                                    <div className='col s6 question-text'>
                                        <div>
                                            <p>Number of questions: {item.questions.length}</p>
                                            <p>Number of answers: {Object.keys(item.answers).length}</p>
                                        </div>
                                    </div>
                                    <Score score={item.questions.length + Object.keys(item.answers).length}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    const item = users[id]

    return {
        item: item
    }
}

export default connect(mapStateToProps)(LeaderBoardItem)