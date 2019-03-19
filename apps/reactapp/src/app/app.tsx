import * as React from 'react';
import { Component } from 'react';

import ProductsMain from './products/containers/products-main';

import './app.scss';

export class App extends Component {
  render() {
    return (
      <ProductsMain></ProductsMain>
    );
  }
}
