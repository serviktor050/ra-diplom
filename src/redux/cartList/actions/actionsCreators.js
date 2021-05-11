import { ADD_PRODUCTS_IN_CART, REMOVE_PRODUCT_IN_CART } from "./actionsType";

//Для отображения товаров в корзине
export const addProductInCart = (products) => ({
  type: ADD_PRODUCTS_IN_CART,
  payload: {
    products,
  },
});

export const removeProductInCart = (id) => ({
  type: REMOVE_PRODUCT_IN_CART,
  payload: {
    id,
  },
});
