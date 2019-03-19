import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import { productReducer } from './products.reducer';

export let store: Store<{}>;

export const ConfigureStore = () => {
    store = createStore(
        combineReducers({
            productReducer
        }), composeWithDevTools(
            applyMiddleware(thunk, logger)
        )

    )

    return store
}