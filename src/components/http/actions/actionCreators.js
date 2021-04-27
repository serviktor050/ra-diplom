import {
  FETCH_SALES_HITS_REQUEST,
  FETCH_SALES_HITS_FAILURE,
  FETCH_SALES_HITS_SUCCESS,
  FETCH_PRODUCTS_LIST_REQUEST,
  FETCH_PRODUCTS_LIST_FAILURE,
  FETCH_PRODUCTS_LIST_SUCCESS,
} from "./actionTypes";

//Для блока "Хиты продаж" на странице "/"

export const fetchSalesHitsRequest = () => ({
  type: FETCH_SALES_HITS_REQUEST,
});

export const fetchSalesHitsFailure = (error) => ({
  type: FETCH_SALES_HITS_FAILURE,
  payload: {
    error,
  },
});

export const fetchSalesHitsSuccess = (items) => ({
  type: FETCH_SALES_HITS_SUCCESS,
  payload: {
    items,
  },
});

//Для блока "Каталог" на страницах "/" и "/catalog.html"
export const fetchProductsListRequest = () => ({
  type: FETCH_PRODUCTS_LIST_REQUEST,
});

export const fetchProductsListFailure = (errorCatalog) => ({
  type: FETCH_PRODUCTS_LIST_FAILURE,
  payload: {
    errorCatalog,
  },
});

export const fetchProductsListSuccess = (products) => ({
  type: FETCH_PRODUCTS_LIST_SUCCESS,
  payload: {
    products,
  },
});
