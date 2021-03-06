import {
  ADD_PRODUCT,
  ADD_PRODUCTS_IN_CART,
  REMOVE_PRODUCT_IN_CART,
  DELETE_PRODUCTS_FROM_CART_AFTER_ORDER,
} from "./actionsTypes";

//Для отображения товаров в корзине
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: {
    product,
  },
});

export const addProductsInCart = (products) => ({
  type: ADD_PRODUCTS_IN_CART,
  payload: {
    products,
  },
});

export const removeProductInCart = (testString) => ({
  type: REMOVE_PRODUCT_IN_CART,
  payload: {
    testString,
  },
});

export const deleteProductsFromCartAfterOrder = () => ({
  type: DELETE_PRODUCTS_FROM_CART_AFTER_ORDER,
});
