import {
  ADD_PRODUCTS_IN_CART,
  REMOVE_PRODUCT_IN_CART,
} from "../actions/actionsTypes";

const initialState = {
  productList: [],
};

export default function cartListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS_IN_CART:
      console.log(action.payload.products);
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
    default:
      return state;
  }
}
