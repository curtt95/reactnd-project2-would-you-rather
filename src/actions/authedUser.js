// set constants
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOG_OUT = 'LOG_OUT'

/**
  * @description Set Authed User action creator
  * @param {String} id - id
  * @return {Object} SET_AUTHED_USER object 
  */
export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

/**
  * @description  Log out action creator
  * @return {Object} LOG_OUT object 
  */
export function logOut() {
    return {
        type: LOG_OUT
    }
}

/**
  * @description handle setAuthedUser
  * @param {String} username - username
  * @return dispatch set authed user 
  */
export function handleSetAuthedUser (username) {
    return (dispatch, getState) => {
        const { users } = getState() // get users from state

        const user = Object.keys(users).filter((user) => users[user].name === username) // get user using filter function

        return dispatch(setAuthedUser(user[0])) // return dispatch setAuthedUser
    }
}

/**
  * @description handle log out
  * @return dispatch log out
  */
export function handleLogOut() {
    return (dispatch) => {
        return dispatch(logOut()) // dispatch log out
    }
}