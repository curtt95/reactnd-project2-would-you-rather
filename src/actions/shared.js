import { getInitialData, saveQuestion } from '../utils/api'
import { _saveQuestion } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
  }

export function saveQuestionAnswer (option, id, authedUser) {
    return {
      type: SAVE_QUESTION_ANSWER,
      option,
      id,
      authedUser
    }
}

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function handleSaveQuestionAnswer (option, id) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState()

        return saveQuestion({
            authedUser: authedUser,
            qid: id,
            answer: option,
        })
        .then((question) => {
            dispatch(saveQuestionAnswer(option, id, authedUser))
            dispatch(hideLoading())
        }) // TODO : add to users state
    }
}

export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authedUser } = getState()

        let question = {
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        }
    
        return _saveQuestion(question)
            .then((question) => {
                dispatch(addQuestion(question))
                dispatch(hideLoading())
            })
    }
}