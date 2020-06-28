import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import Score from './Score'
import { Grid, Header, Segment, Divider } from 'semantic-ui-react'

class LeaderBoardItem extends Component {
    render() {
        const { item } = this.props

        return (
            <Fragment>
                <Header as='h5' attached='top'>
                    <b>{item.name} asks ...</b>
                </Header>
                <Segment attached>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Avatar user={item} />
                                <Divider vertical />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <p>Number of questions: {item.questions.length}</p>
                                <p>Number of answers: {Object.keys(item.answers).length}</p>
                            </Grid.Column>
                            <Divider vertical />
                            <Grid.Column width={4}>
                                <Score score={item.questions.length + Object.keys(item.answers).length}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Fragment>
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