import { combineReducers } from 'redux';

import shoppingCart from 'store/ducks/shoppingCart/shoppingCart.slice';
import products from 'store/ducks/products/products.slice';

export default combineReducers({
  shoppingCart,
  products,
});
