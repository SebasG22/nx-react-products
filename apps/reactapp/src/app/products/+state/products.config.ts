import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { productReducer } from './products.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

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