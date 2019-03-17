import * as React from 'react'
import "./spinner.scss";

export default class Spinner extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="spinner-container">
                    <div className="progress-bar progress-bar--material progress-bar--indeterminate">
                    </div>
                    <p className="spinner-container-title"> Loading Products</p>
                </div>
            </React.Fragment>
        )
    }
}
