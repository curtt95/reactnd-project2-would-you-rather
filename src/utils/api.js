import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer
  } from './_DATA.js'
  
export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function saveQuestion (info) {
    return _saveQuestionAnswer(info)
  }