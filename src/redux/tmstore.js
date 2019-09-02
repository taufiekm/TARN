import { createStore, applyMiddleware, combineReducers } from 'redux'

import { logger, promise } from '../redux/middlewares'
import categories from './reducers/categories'

const reducers = combineReducers({
    categories
})

const tmstore = createStore(
    reducers,
    applyMiddleware(logger, promise)
)

export default tmstore