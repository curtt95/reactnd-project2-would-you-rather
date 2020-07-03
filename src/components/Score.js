import React, { Component, Fragment } from 'react'
import { Statistic, Segment, Header } from 'semantic-ui-react'

/**
 * Score Component
 */
class Score extends Component {
    render() {
        return (
            <Fragment>
                {/* Return the users Score as Statistic Component */}
                <Header as='h5' attached='top'>
                    Score
                </Header>
                <Segment attached>
                    <Statistic size="mini">
                        <Statistic.Value>{this.props.score}</Statistic.Value>
                    </Statistic>
                </Segment>
            </Fragment>
        )
    }
}

export default Score