import { Entity } from './products.reducer';

export enum ProductsActionTypes {
    LoadProducts = '[Products] Load Products',
    ProductsLoaded = '[Products] Products Loaded',
    LoadProductsError = '[Products] Load Products Error'
}

export const LoadProducts = () => ({
    type: ProductsActionTypes.LoadProducts,
});

export const ProductsLoaded = (payload: Entity[]) => ({
    type: ProductsActionTypes.ProductsLoaded,
    payload
});

export const LoadProductsError = (payload: string) => ({
    type: ProductsActionTypes.ProductsLoaded,
    payload
});