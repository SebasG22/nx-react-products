import * as React from 'react';
import './products-main.scss';
import Productsheader from '../components/header/products-header';
import ProductsList from '../components/product-list/product-list';

// tslint:disable-next-line:class-name
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
