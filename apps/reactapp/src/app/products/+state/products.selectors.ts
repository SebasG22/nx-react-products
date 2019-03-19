import * as _ from 'lodash';
const uuidv4 = require('uuid/v4');

import { Entity, ProductsState } from './products.reducer';
import { store } from './products.config';

export const getProductsCategories = (products: Entity[]) => {
    const productsByCategory = {};

    _.forEach(products, (item) => {
        if (!_.has(productsByCategory, item.category)) {
            productsByCategory[`${item.category}`] = []
        }
        if (!_.has(item, '_id')) {
            item._id = uuidv4();
        }
        productsByCategory[`${item.category}`].push(item);
    });
    return productsByCategory;

}
