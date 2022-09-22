import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { createStore } from 'saga'
import { rootSaga } from '../Saga/Root.Saga'
import { rootReducer } from './Reducer/Root.Reducer'

const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, sagaMiddleware]

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga);
