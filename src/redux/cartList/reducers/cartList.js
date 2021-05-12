import {
  ADD_PRODUCTS_IN_CART,
  REMOVE_PRODUCT_IN_CART,
  DELETE_PRODUCTS_FROM_CART_AFTER_ORDER,
} from "../actions/actionsTypes";

const initialState = {
  productList: [],
};

export default function cartListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS_IN_CART:
      return {
        productsList: action.payload.products,
      };
    case REMOVE_PRODUCT_IN_CART:
      const { testString } = action.payload;
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
