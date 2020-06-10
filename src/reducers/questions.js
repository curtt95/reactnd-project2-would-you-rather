import { RECEIVE_QUESTIONS } from "../actions/questions";
import { ADD_QUESTION, SAVE_QUESTION_ANSWER } from "../actions/shared";

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id] : action.question
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