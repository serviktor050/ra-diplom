import {
  FETCH_PRODUCT_CARD_REQUEST,
  FETCH_PRODUCT_CARD_FAILURE,
  FETCH_PRODUCT_CARD_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  loadingCard: false,
  errorCard: null,
};

export default function productCardReducer(state = initialState, action) {
  switch (action.type) {
    //Для наполнения карточки товара
    case FETCH_PRODUCT_CARD_REQUEST:
      return {
        ...state,
        loadingCard: true,
        errorCard: null,
      };
    case FETCH_PRODUCT_CARD_FAILURE:
      const { errorCard } = action.payload;
      return {
        ...state,
        loadingCard: false,
        errorCard: errorCard,
      };
    case FETCH_PRODUCT_CARD_SUCCESS:
      const { items } = action.payload;
      return {
        ...state,
        items,
        loadingCard: false,
        errorCard: null,
      };
    default:
      return state;
  }
}
