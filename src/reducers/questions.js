import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER } from "../actions/questions";

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
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
                                : state[action.id][action.option].votes.concat([action.authedUser]) 
                    }
                    
                }
            }
        default:
            return state
    }
}