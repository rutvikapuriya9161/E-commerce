import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createStore } from 'saga'
import { rootSaga } from '../Saga/Root.Saga'
import { rootReducer } from './Reducer/Root.Reducer'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga);
