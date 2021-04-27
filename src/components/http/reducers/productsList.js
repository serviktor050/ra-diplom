import {
  FETCH_PRODUCTS_LIST_REQUEST,
  FETCH_PRODUCTS_LIST_FAILURE,
  FETCH_PRODUCTS_LIST_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  products: [],
  loadingCatalog: false,
  errorCatalog: null,
};

export default function productsListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_LIST_REQUEST:
      return {
        ...state,
        loadingCatalog: true,
        errorCatalog: null,
      };
    case FETCH_PRODUCTS_LIST_FAILURE:
      const { errorCatalog } = action.payload;
      return {
        ...state,
        loadingCatalog: false,
        errorCatalog: errorCatalog,
      };
    case FETCH_PRODUCTS_LIST_SUCCESS:
      const { products } = action.payload;
      return {
        ...state,
        products,
        loadingCatalog: false,
        error: null,
      };
    default:
      return state;
  }
}
