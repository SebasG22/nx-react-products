import * as React from 'react';
import "./products-header.scss";

export default class Productsheader extends React.Component {
    render() {
        return (
            <div className="products-header-container">
                <img className="products-header-container-logo" src="/assets/img/react-logo.svg"></img>
                <div className="products-header-container-title-container">
                    <h1 className="products-header-container-title-container-title"> Searchable</h1>
                    <h2 className="products-header-container-title-container-title"> Product Table</h2>
                </div>
            </div>
        )
    }
}
