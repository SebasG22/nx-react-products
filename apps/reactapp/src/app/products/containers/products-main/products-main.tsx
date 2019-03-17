import * as React from 'react';
import './products-main.scss';
import { Productsheader } from '../../components/product-header/products-header';

// tslint:disable-next-line:class-name
export default class ProductsMain extends React.Component {
    render() {
        return (
            <div className="products-main-container">
                <Productsheader></Productsheader>
            </div>
        )
    }
}
