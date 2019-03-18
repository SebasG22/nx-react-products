import * as React from 'react';
import "./product-list.scss";
import { connect } from 'react-redux';
import { loadProducts } from '../../+state/products.dispatcher';
import { getProductsCategories } from '../../+state/products.selectors';
import ProductsCategory from '../products-category/products-category';

interface Props {
    selectedProducts: any[];
    loadProducts: any;
}
class ProductsList extends React.Component<Props> {

    componentWillMount() {
        console.log(this.props);
        loadProducts();
    }

    render() {
        const { selectedProducts } = this.props;

        return (
            <ProductsCategory products={getProductsCategories(selectedProducts)} modalIsOpened={false}></ProductsCategory>
        )
    }
}



const mapStateToProps = state => ({
    selectedProducts: state.productReducer.list
})

const mapDispatchToProps = () => ({
    loadProducts
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
