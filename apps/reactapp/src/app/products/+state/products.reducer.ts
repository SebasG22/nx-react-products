import { ProductsActionTypes } from './products.actions.enums';

export interface Entity {
    name: string;
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
    console.log('Entre aquí');
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

    }
    return state;
}

