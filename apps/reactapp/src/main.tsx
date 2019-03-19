import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app/app';
import { Provider } from 'react-redux'
import { configure } from 'react-testing-library';
import { ConfigureStore } from './app/products/+state/products.config';


ReactDOM.render(
    <Provider store={ConfigureStore()}>
        <App />
    </Provider>, document.querySelector('sample-app-root'));

