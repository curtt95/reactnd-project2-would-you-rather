import { saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

function saveQuestionAnswer (option, id, authedUser) {
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

export function handleSaveQuestionAnswer (option, id) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return saveQuestion({
            authedUser: authedUser,
            qid: id,
            answer: option,
        })
        .then((question) => dispatch(saveQuestionAnswer(option, id, authedUser))) // TODO : add to users state
    }
}