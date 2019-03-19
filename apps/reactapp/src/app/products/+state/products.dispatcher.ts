import * as _ from 'lodash';
const uuidv4 = require('uuid/v4');

import { LoadProducts, ProductsLoaded, LoadProductsError, CreateProduct, ProductCreated, CreateProductError, UpdateProduct, ProductUpdated } from './products.actions.enums';
import { Entity } from './products.reducer';
import { fetchProducts } from '../services/products.service';
import { store } from './products.config';


export function loadProducts() {
    store.dispatch(LoadProducts());
    return fetchProducts().then((data: Entity[]) => {
        setTimeout(() => {
            productsLoaded(data);
        }, 2000);
    }).catch((e) => {
        loadProductsError(e);
    })
}

export function productsLoaded(payload: Entity[]) {
    store.dispatch(ProductsLoaded(payload))
}

export function loadProductsError(payload: string) {
    store.dispatch(LoadProductsError(payload));
}

export function CreateOrUpdateProduct(product: Entity) {
    const list: Entity[] = [..._.get(store.getState(),'productReducer.list')];
    if (_.get(product, '_id', '') !== '') {
        console.log(store.getState());
        const a = _.findIndex(list, { _id: product._id });
        list[a] = product;
        return productUpdated(list);
    }
    product._id = uuidv4();
    list.push(product);
    return store.dispatch(ProductCreated(list));
}

export function productCreated(payload: Entity[]) {
    store.dispatch(ProductCreated(payload));
}

export function productUpdated(payload: Entity[]){
    store.dispatch(ProductUpdated(payload));
}

export function createProductError(payload: string) {
    store.dispatch(CreateProductError(payload));
}
