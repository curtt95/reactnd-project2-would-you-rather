export const RECEIVE_USERS = 'RECEIVE_USERS'

/**
  * @description Receive users action creators
  * @param {Object} users - users
  * @return {Object} RECEIVE_USERS object 
  */
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}