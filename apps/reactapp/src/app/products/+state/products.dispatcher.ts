import { LoadProducts, ProductsLoaded, LoadProductsError } from './products.actions.enums';
import { fetchProducts } from '../services/products.service';
import { Entity } from './products.reducer';
import { store } from './products.config';

export function loadProducts() {
    store.dispatch(LoadProducts());
    return fetchProducts().then((data: Entity[]) => {
        console.warn(data);
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

export function loadProductsError(payload) {
    store.dispatch(LoadProductsError(payload));
}
