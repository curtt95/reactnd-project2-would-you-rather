import React, { Component } from 'react'

class Score extends Component {
    render() {
        return (
            <div className="col s3">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="title light-blue">
                                <b>Score</b>
                            </div>
                            <div className="card-content">
                                <div className="row">
                                    {this.props.score}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Score