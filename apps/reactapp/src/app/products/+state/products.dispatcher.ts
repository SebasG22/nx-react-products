import { LoadProducts, ProductsLoaded, LoadProductsError, CreateProduct, ProductCreated, CreateProductError, UpdateProduct } from './products.actions.enums';
import { fetchProducts } from '../services/products.service';
import { Entity } from './products.reducer';
import { store } from './products.config';
import * as _ from 'lodash';

export function loadProducts() {
    store.dispatch(LoadProducts());
    return fetchProducts().then((data: Entity[]) => {
        console.warn(data);
        setTimeout(() => {
            productsLoaded(data);
        }, 3000);
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
    if (_.get(product, '_id', '') !== '') {
        return store.dispatch(UpdateProduct(product));
    }
    return store.dispatch(CreateProduct(product));
}

export function productCreated() {
    store.dispatch(ProductCreated());
}

export function createProductError(payload: string) {
    store.dispatch(CreateProductError(payload));
}
