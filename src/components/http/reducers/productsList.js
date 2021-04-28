import {
  FETCH_PRODUCTS_LIST_REQUEST,
  FETCH_PRODUCTS_LIST_FAILURE,
  FETCH_PRODUCTS_LIST_SUCCESS,
  FETCH_PRODUCTS_LIST_FILTER_REQUEST,
  FETCH_PRODUCTS_LIST_FILTER_FAILURE,
  FETCH_PRODUCTS_LIST_FILTER_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  products: [],
  loadingCatalog: false,
  errorCatalog: null,
};

export default function productsListReducer(state = initialState, action) {
  switch (action.type) {
    //Для блока "Каталог" на страницах "/" и "/catalog.html"
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

    //Для фильтра блока "Каталог" на страницах "/" и "/catalog.html"
    case FETCH_PRODUCTS_LIST_FILTER_REQUEST:
      return {
        ...state,
        loadingCatalog: true,
        errorCatalog: null,
      };
    case FETCH_PRODUCTS_LIST_FILTER_FAILURE:
      return {
        ...state,
        loadingCatalog: false,
        errorCatalog: action.payload.errorCatalog,
      };
    case FETCH_PRODUCTS_LIST_FILTER_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        loadingCatalog: false,
        error: null,
      };
    default:
      return state;
  }
}
