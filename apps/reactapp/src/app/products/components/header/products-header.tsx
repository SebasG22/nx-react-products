import * as React from 'react';
import "./products-header.scss";
import { connect } from 'react-redux';
import { testing } from '../../+state/products.facade';

interface Props {
    selectedProducts: any[];
    testing: any;
}
export class Productsheader extends React.Component<Props, {}> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.testing();
    }
    render() {
        const { selectedProducts } = this.props;
        return (<div className="products-header-container">
            <img className="products-header-container-logo" src="/assets/img/react-logo.svg"></img>
            <div className="products-header-container-title-container">
                <p> Hola {selectedProducts.length}</p>
                <h1 className="products-header-container-title-container-title"> Searchable</h1>
                <h2 className="products-header-container-title-container-title"> Product Table</h2>
            </div>
        </div>)
    }
}



const mapStateToProps = state => ({
    selectedProducts: state.productReducer.list
})

const mapDispatchToProps = (dispatch) => ({
    testing
})

export default connect(mapStateToProps, mapDispatchToProps)(Productsheader);
