import { Entity } from './products.reducer';

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

export const ProductCreated = () => ({
    type: ProductsActionTypes.ProductCreated
});

export const CreateProductError = (payload: string) => ({
    type: ProductsActionTypes.CreateProductError,
    payload
});

export const UpdateProduct = (payload: Entity) => ({
    type: ProductsActionTypes.UpdateProduct,
    payload
});

export const ProductUpdateed = () => ({
    type: ProductsActionTypes.ProductUpdated
});

export const UpdateProductError = (payload: string) => ({
    type: ProductsActionTypes.UpdateProductError,
    payload
});