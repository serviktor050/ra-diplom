import {
  ADD_PRODUCT,
  ADD_PRODUCTS_IN_CART,
  REMOVE_PRODUCT_IN_CART,
  DELETE_PRODUCTS_FROM_CART_AFTER_ORDER,
} from "../actions/actionsTypes";

import { removeProduct, getProductsList } from "../../../utils/cartStorage";

const initialState = {
  productsList: [],
};

export default function cartListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productsList: [...state.productsList, action.payload.product],
      };
    case ADD_PRODUCTS_IN_CART:
      getProductsList();
      return {
        ...state,
        productsList: action.payload.products,
      };
    case REMOVE_PRODUCT_IN_CART:
      const { testString } = action.payload;
      removeProduct(testString);
      return {
        ...state,
        productsList: state.productsList.filter((product) => {
          return `${product.id}${product.size}` !== testString;
        }),
      };
    case DELETE_PRODUCTS_FROM_CART_AFTER_ORDER:
      return { ...initialState };
    default:
      return state;
  }
}
