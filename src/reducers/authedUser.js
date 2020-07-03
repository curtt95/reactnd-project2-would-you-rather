import { SET_AUTHED_USER, LOG_OUT } from "../actions/authedUser";

/**
  * @description authedUser reducer
  * @param {Object} state - state
  * @return {String} action -  
  */
export default function authedUser(state = null, action) {
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.id // set authed user
        case LOG_OUT:
            return null // set to null if log out
        default:
            return state
    }
}