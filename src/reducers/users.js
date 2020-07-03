import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION, SAVE_QUESTION_ANSWER } from "../actions/shared";

/**
  * @description users reducer
  * @param {Object} state - state
  * @return {String} action -  
  */
export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users // receive all users
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat(action.question.id) // on add question, add to questions array in users object
                }
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.id]: action.option // store users option when voting on a question
                    }
                }
            }
        default:
            return state
    }
}