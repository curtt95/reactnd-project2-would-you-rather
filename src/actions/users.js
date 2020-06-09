export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function saveQuestionAnswerUser (option, id, authedUser) {
    return {
      type: SAVE_QUESTION_ANSWER,
      option,
      id,
      authedUser
    }
  }