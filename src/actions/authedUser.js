export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOG_OUT = 'LOG_OUT'

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}

export function handleSetAuthedUser (username) {
    return (dispatch, getState) => {
        const { users } = getState()

        const user = Object.keys(users).filter((user) => users[user].name === username)

        return dispatch(setAuthedUser(user[0]))
    }
}

export function handleLogOut() {
    return (dispatch) => {
        return dispatch(logOut())
    }
}