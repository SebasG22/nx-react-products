import * as React from 'react';
import { connect } from 'react-redux';

import { loadProducts } from '../../+state/products.dispatcher';
import { getProductsCategories } from '../../+state/products.selectors';
import ProductsCategory from '../products-category/products-category';

import "./product-list.scss";
interface Props {
    selectedProducts: any[];
}
class ProductsList extends React.Component<Props> {

    componentWillMount() {
        loadProducts();
    }

    render() {
        const { selectedProducts } = this.props;

        return (
            <ProductsCategory products={getProductsCategories(selectedProducts)}></ProductsCategory>
        )
    }
}



const mapStateToProps = state => ({
    selectedProducts: state.productReducer.list
})


export default connect(mapStateToProps, null)(ProductsList);
