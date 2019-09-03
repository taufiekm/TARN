import { createStore, applyMiddleware, combineReducers } from 'redux'

import { logger, promise } from '../redux/middlewares'
import categories from './reducers/categories'
import transaction from './reducers/transaction'
import menu from  './reducers/menu'

const reducers = combineReducers({
    categories,
    transaction,
    menu

})

const tmstore = createStore(
    reducers,
    applyMiddleware(logger, promise)
)

export default tmstore