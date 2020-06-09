export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function saveQuestionAnswer (option, id, authedUser) {
    return {
      type: SAVE_QUESTION_ANSWER,
      option,
      id,
      authedUser
    }
  }

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}