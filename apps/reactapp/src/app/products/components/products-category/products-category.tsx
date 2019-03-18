import * as React from 'react';
import Spinner from '../../../shared/spinner/spinner';
import * as _ from 'lodash';
import { Entity } from '../../+state/products.reducer';
import "./products-category.scss";
import Productform from '../product-form/product-form';

export interface Props {
    products: any[]
}

export interface State {
    modalIsOpened: boolean;
}

export default class ProductsCategory extends React.Component<Props, State> {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.setModalIsOpended(false);
    }
    
    setModalIsOpended(value: boolean){
        console.log('Change to', value);
        this.setState({modalIsOpened: value})
        console.log('Changed', this.state);

    }

    get modalIsOpened(){
        console.log(this.props);
        return this.state.modalIsOpened;
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
            <div className="products-container">
                <div className="products-container-item__name">{item.name}</div>
                <div className="products-container-item__price">{item.price}</div>

            </div>
            </React.Fragment>
        })

        
    }

    myCallback = (dataFromChild) => {
        console.log(dataFromChild);
        this.setModalIsOpended(false);
    }

    openModalForm = (e) => {
        e.preventDefault();
        console.log('Click Detected', this.props);
        this.setModalIsOpended(true);
    }

    render() {
        const products = this.props.products;
        const categories = Object.keys(products);
        console.log('mis props', this.props);
        const a = this.buildCategoryTitle(products);
        console.log({ a })
        return (
            <React.Fragment>
                {!_.isEmpty(products) ? (
                    <React.Fragment>
                        {a}
                        <button onClick={this.openModalForm}> Add Product</button>
                        <Productform opened={this.modalIsOpened} callbackFromParent={this.myCallback}></Productform>
                    </React.Fragment>
                ) : (<Spinner></Spinner>
                    )
                }
            </React.Fragment>

        )
    }
}
