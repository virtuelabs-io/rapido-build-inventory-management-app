import { createStore, combineReducers, applyMiddleware } from 'redux';
import { coreReducer } from './core/reducer';
import { CoreActionTypes } from './core/actions';

export const rootReducer = combineReducers({
    core: coreReducer
})

export type AppActionTypes = CoreActionTypes

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);