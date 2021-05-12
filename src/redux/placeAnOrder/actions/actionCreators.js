import {
  PLACE_AN_ORDER_REQUEST,
  PLACE_AN_ORDER_FAILURE,
  PLACE_AN_ORDER_SUCCESS,
} from "./actionTypes";

//Для отправки формы заказа
export const placeAnOrderRequest = (form) => ({
  type: PLACE_AN_ORDER_REQUEST,
  payload: {
    form,
  },
});

export const placeAnOrderFailure = (error) => ({
  type: PLACE_AN_ORDER_FAILURE,
  payload: {
    error,
  },
});

export const placeAnOrderSuccess = (status) => {
  console.log(status);
  return {
    type: PLACE_AN_ORDER_SUCCESS,
    payload: {
      status,
    },
  };
};
