import * as React from 'react';
import "./product-form.scss";

interface Props {
    opened: boolean;
    callbackFromParent: any;
}
export default class Productform extends React.Component<Props> {

    constructor(props) {
        super(props);
    }

    printLog = (e) => {
        e.preventDefault();
        console.log('Click Detected', this.props);
        this.props.callbackFromParent(false);
    }

    get isOpened() {
        return this.props.opened
    }

    render() {

        return (

            <React.Fragment>
                {this.isOpened && (
                    <React.Fragment>
                        <div className="dialog-mask dialog-mask--material"></div>
                        <div className="dialog dialog--material product-form-container" onClick={this.printLog}></div>
                        <div className="dialog dialog-container--material product-form-wrapper">
                    <div>
                        <h1> Add a Product</h1>
                        <p> Please fill the data requested in this dialog to add a product to our table,
                including Product name, price and Category.</p>
                        <span>
                            <form>
                                <input className="text-input text-input--underbar product-form-wrapper-input" placeholder="Product Name" type="text" required />
                                <br />
                                <input className="text-input text-input--underbar product-form-wrapper-input" placeholder="Price" type="text" required />
                                <br />
                                <input className="text-input text-input--underbar product-form-wrapper-input" placeholder="Price" type="text" required />
                                <br />
                                <div>
                                    <label htmlFor="category"> Category </label>
                                    <select id="category" className="select-input select-input--material">
                                        <option value="Electronics">Electronics</option>
                                        <option value="Sporting Goods">Sporting Goods</option>
                                    </select>
                                </div>
                            </form>
                        </span>
                        <button className="button button--outline">Cancel</button>
                        <button className="button">Add</button>

                    </div>
                </div>
                    </React.Fragment>
                )
                }
            </React.Fragment>
        )
    }
}
