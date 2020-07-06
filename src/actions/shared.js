import { getInitialData, saveQuestion } from '../utils/api'
import { _saveQuestion } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

/**
  * @description New question action creator
  * @param {String} question - question
  * @return {Object} ADD_QUESTION object 
  */
export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    };
  }

  /**
  * @description Save question answer action creator
  * @param {String} option - option
  * @param {String} id - question id
  * @param {String} authedUser - authedUser
  * @return {Object} SAVE_QUESTION_ANSWER object 
  */
export function saveQuestionAnswer (option, id, authedUser) {
    return {
      type: SAVE_QUESTION_ANSWER,
      option,
      id,
      authedUser
    };
}

/**
  * @description Get initial data
  * @return dispatch receive all data
  */
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData() // get initial data from api
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions)); // get users and questions
                dispatch(hideLoading());
            });
    };
}

/**
  * @description Handle save question answer
  * @param {String} option - option
  * @param {String} id - id
  * @return saveQuestion
  */
export function handleSaveQuestionAnswer (option, id) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        const { authedUser } = getState();

        return saveQuestion({
            authedUser: authedUser,
            qid: id,
            answer: option,
        })
        .then((question) => {
            dispatch(saveQuestionAnswer(option, id, authedUser));
            dispatch(hideLoading());
        });
    };
}

/**
  * @description Handle Add Question
  * @param {String} optionOne - option 1
  * @param {String} optionOne - option 2
  * @return _saveQuestion from _DATA
  */
export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        const { authedUser } = getState(); // get authed user

        let question = { // create new question object to pass to function
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        };
    
        return _saveQuestion(question)
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(hideLoading());
            });
    }
}