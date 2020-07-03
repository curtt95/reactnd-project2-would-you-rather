import { RECEIVE_QUESTIONS } from "../actions/questions";
import { ADD_QUESTION, SAVE_QUESTION_ANSWER } from "../actions/shared";

/**
  * @description questions reducer
  * @param {Object} state - state
  * @return {String} action -  
  */
export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions // return existing state + all questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id] : action.question // add question to question list in state
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.option] : {
                        ...state[action.id][action.option],
                        votes: state[action.id][action.option].votes.includes(action.authedUser)
                                ? state[action.id][action.option].votes
                                : state[action.id][action.option].votes.concat([action.authedUser]) // TODO: find and replace - check rubric
                    }
                    
                }
            }
        default:
            return state
    }
}