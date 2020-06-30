import { createStore, combineReducers, applyMiddleware } from 'redux';
import { coreReducer } from './core/reducer';
import { CoreActionTypes } from './core/actions';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import { ProductsReducer } from './products/reducer';

export const rootReducer = combineReducers({
    core: coreReducer,
    products: ProductsReducer
});

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export type AppActionTypes = CoreActionTypes

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));