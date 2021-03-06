import * as _ from 'lodash';

import { ProductsActionTypes } from './products.actions.enums';

export interface Entity {
    _id?: string;
    category: string;
    name: string;
    price: string;
    stocked: boolean;
}

export interface ProductsState {
    list: Entity[];
    selectedId?: string | number;
    loaded: boolean;
    error?: any;
}

export const initialState: ProductsState = {
    list: [],
    loaded: false
};

export function productReducer(
    state: ProductsState = initialState,
    action): ProductsState {
    switch (action.type) {
        case ProductsActionTypes.LoadProducts: {
            state = { ...state, loaded: false }
            break;
        }
        case ProductsActionTypes.ProductsLoaded: {
            state = { ...state, loaded: true, list: action.payload }
            break;
        }
        case ProductsActionTypes.LoadProductsError: {
            state = { ...state, loaded: true, error: action.payload }
            break;
        }
        case ProductsActionTypes.ProductCreated: {
            state = { ...state, list: action.payload };
            break;
        }
        case ProductsActionTypes.ProductUpdated: {
            state = { ...state, list: action.payload }
            break;
        }

    }
    return state;
}

