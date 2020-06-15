export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function handleSetAuthedUser (username) {
    return (dispatch, getState) => {
        const { users } = getState()

        const user = Object.keys(users).filter((user) => users[user].name === username)

        return dispatch(setAuthedUser(user[0]))
    }
}