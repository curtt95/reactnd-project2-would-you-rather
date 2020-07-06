import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import Score from './Score'
import { Grid, Header, Segment, Divider } from 'semantic-ui-react'

/**
 * Leaderboard Item Component
 */
class LeaderBoardItem extends Component {
    render() {
        const { item, place } = this.props // destructure our props

        const order = getPlace(place) // get ranking color

        return (
            <Fragment>
                <Header as='h5' attached='top'>{item.name}</Header>
                <Segment attached>
                    <a href="/leaderboard" className={`ui ${order} left corner label`}>{place}</a> {/* Color based on ranking */}
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Avatar user={item} /> {/* Users avatar */}
                                <Divider vertical />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <span><b>Number of questions asked:</b> {item.questions.length}</span> {/* Number of questions */}
                                <Divider />
                                <span><b>Number of questions answered:</b> {Object.keys(item.answers).length}</span> {/* Number of answers */}
                            </Grid.Column>
                            <Divider vertical />
                            <Grid.Column width={4}>
                                <Score score={item.questions.length + Object.keys(item.answers).length}/> {/* Render users Score */}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Fragment>
        )
    }
}

/**
  * @description Return corresponsing color corresponding to ranking
  * @param {Integer} place - Users ranking
  * @return {String} color of ranking 
  */
const getPlace = (place) => {
    switch (place) {
        case 1:
            return "yellow"; // first place
        case 2:
            return "silver"; // second place
        case 3:
            return "brown"; // third place
        default:
            return "";
    };
}

/**
  * @description mapStateToProps function
  * @param {Object} from_store - Get data from store
  * @param {Object} from_parent - Get props passed from parent
  * @return {Object} props
  */
function mapStateToProps({ users }, { id }) {
    const item = users[id]; // get user

    return {
        item: item // return user as props
    };
}

export default connect(mapStateToProps)(LeaderBoardItem)