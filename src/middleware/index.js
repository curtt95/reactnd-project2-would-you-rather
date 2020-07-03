import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import logger from './logger'

/**
 * Apply middleware function
 */
export default applyMiddleware(
    thunk,
    logger
)