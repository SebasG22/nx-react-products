import { Entity } from './products.reducer';

/**
 * There are some actions that aren't using yet, these are intended to connect it with a backend.
 */
export enum ProductsActionTypes {
    LoadProducts = '[Products] Load Products',
    ProductsLoaded = '[Products] Products Loaded',
    LoadProductsError = '[Products] Load Products Error',
    CreateProduct = '[Products] Create Product',
    ProductCreated = '[Products] Product Created',
    CreateProductError = '[Products] Create Product Error',
    UpdateProduct = '[Products] Update Product',
    ProductUpdated = '[Products] Product Updated',
    UpdateProductError = '[Products] Update Product Error'
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

export const CreateProduct = (payload: Entity) => ({
    type: ProductsActionTypes.CreateProduct,
    payload
});

export const ProductCreated = ( payload: Entity[]) => ({
    type: ProductsActionTypes.ProductCreated,
    payload
});

export const CreateProductError = (payload: string) => ({
    type: ProductsActionTypes.CreateProductError,
    payload
});

export const UpdateProduct = (payload: Entity) => ({
    type: ProductsActionTypes.UpdateProduct,
    payload
});

export const ProductUpdated = (payload: Entity[]) => ({
    type: ProductsActionTypes.ProductUpdated,
    payload
});

export const UpdateProductError = (payload: string) => ({
    type: ProductsActionTypes.UpdateProductError,
    payload
});