import * as React from 'react';

import ProductsList from '../components/product-list/product-list';
import { Productsheader } from '../components/product-header/products-header';

import './products-main.scss';

export default class ProductsMain extends React.Component {
    render() {
        return (
            <div className="products-main-container">
                <Productsheader></Productsheader>
                <ProductsList></ProductsList>
            </div>
        )
    }
}
