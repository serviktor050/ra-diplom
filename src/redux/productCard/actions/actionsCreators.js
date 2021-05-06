import {
  FETCH_PRODUCT_CARD_REQUEST,
  FETCH_PRODUCT_CARD_FAILURE,
  FETCH_PRODUCT_CARD_SUCCESS,
} from "./actionTypes";

//Для наполнения карточки товара
export const fetchProductCardRequest = (id) => ({
  type: FETCH_PRODUCT_CARD_REQUEST,
  payload: {
    id,
  },
});

export const fetchProductCardFailure = (errorCard) => ({
  type: FETCH_PRODUCT_CARD_FAILURE,
  payload: {
    errorCard,
  },
});

export const fetchProductCardSuccess = (items) => ({
  type: FETCH_PRODUCT_CARD_SUCCESS,
  payload: {
    items,
  },
});
