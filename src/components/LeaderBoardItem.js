import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import Score from './Score'
import { Grid, Header, Segment, Divider } from 'semantic-ui-react'

class LeaderBoardItem extends Component {
    render() {
        const { item, place } = this.props

        const order = getPlace(place)

        return (
            <Fragment>
                <Header as='h5' attached='top'>{item.name}</Header>
                <Segment attached>
                    <a className={`ui ${order} left corner label`}>{place}</a>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Avatar user={item} />
                                <Divider vertical />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <span><b>Number of questions:</b> {item.questions.length}</span>
                                <Divider />
                                <span><b>Number of answers:</b> {Object.keys(item.answers).length}</span>
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

const getPlace = (place) => {
    switch (place) {
        case 1:
            return "yellow"
        case 2:
            return "silver"
        case 3:
            return "brown"
        default:
            return ""
    }
}

function mapStateToProps({ users }, { id }) {
    const item = users[id]

    return {
        item: item
    }
}

export default connect(mapStateToProps)(LeaderBoardItem)