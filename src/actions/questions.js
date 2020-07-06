export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

/**
  * @description Receive questions action questions
  * @param {Object} questions - questions
  * @return {Object} RECEIVE_QUESTIONS object 
  */
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}