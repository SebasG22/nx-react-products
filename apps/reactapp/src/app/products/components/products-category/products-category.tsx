import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';

import { CreateOrUpdateProduct } from '../../+state/products.dispatcher';
import { Entity } from '../../+state/products.reducer';
import Productform, { ModalData } from '../product-form/product-form';
import Spinner from '../../../shared/spinner/spinner';

import "./products-category.scss";

interface Props {
    products: Entity[],
    createProduct: any
}

interface State {
    modalIsOpened: boolean;
    productInformation: Entity;
}

class ProductsCategory extends React.Component<Props, State> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setModalIsOpended(false);
    }

    setModalIsOpended(value: boolean) {
        this.setState({ ...this.state, modalIsOpened: value })
    }

    get modalIsOpened() {
        return this.state.modalIsOpened;
    }

    get productInformation() {
        return this.state.productInformation;
    }


    setProductInformation(productInformation: Entity) {
        if (!_.get(productInformation, 'name')) {
            this.setState({ ...this.state, productInformation: { _id: undefined, name: '', price: '', category: '', stocked: false } }, () => {
                this.openModalForm();
            })
        } else {
            this.setState({ ...this.state, productInformation }, () => {
                this.openModalForm();
            });
        }
    }

    closeModalForm = (data: ModalData) => {
        if (data.formSubmitted) {
            CreateOrUpdateProduct(data.productInformation);
        }
        this.setModalIsOpended(false);
    }

    openModalForm = () => {
        this.setModalIsOpended(true);
    }

    buildCategoryTitle(products: Entity[]) {
        return Object.keys(products).map((key) => {
            return (
                <React.Fragment key={key}>
                    <div className="products-category-title-container">
                        <div className="products-category-title-bar">
                            <h3> {key}</h3>
                        </div>
                        {this.buildProductsByCategory(key, products)}
                    </div>

                </React.Fragment>
            )
        })
    }

    buildProductsByCategory(category: string, products: Entity[]) {
        return products[category].map((item) => {
            return <React.Fragment key={item._id}>
                <div className="products-container" onClick={(e) => { e.preventDefault(); this.setProductInformation({ ...item }) }}>
                    <div className="products-container-item__name">{item.name}</div>
                    <div className="products-container-item__price">{item.price}</div>
                </div>
            </React.Fragment >
        })


    }

    render() {
        const products = this.props.products;
        return (
            <React.Fragment>
                {!_.isEmpty(products) ? (
                    <React.Fragment>
                        {this.buildCategoryTitle(products)}
                        <button onClick={() => { this.setProductInformation(null) }}> Add Product</button>
                        <Productform opened={this.modalIsOpened} onClosed={this.closeModalForm} productInformation={this.productInformation}></Productform>
                    </React.Fragment>
                ) : (<Spinner></Spinner>
                    )
                }
            </React.Fragment>

        )
    }
}


export default ProductsCategory;
