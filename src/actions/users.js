export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER' // TODO: add to user state

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}