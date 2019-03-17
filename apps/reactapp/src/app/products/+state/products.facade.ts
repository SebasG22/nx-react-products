import { LoadProducts, ProductsLoaded, LoadProductsError } from './products.actions.enums';
import { fetchProducts } from './products.service';
import { Entity } from './products.reducer';
import { store } from './products.config';

export function testing(dispatch) {
    console.log('Entro aquí');
    store.dispatch(LoadProducts());
    return fetchProducts().then((data: Entity[]) => {
        console.warn(data);
        setTimeout(() => {
            store.dispatch(ProductsLoaded(data))
        }, 2000);
    }).catch((e) => {
        store.dispatch(LoadProductsError(e));
    })
}