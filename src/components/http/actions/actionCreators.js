import {
  FETCH_SALES_HITS_REQUEST,
  FETCH_SALES_HITS_FAILURE,
  FETCH_SALES_HITS_SUCCESS,
  FETCH_PRODUCTS_LIST_REQUEST,
  FETCH_PRODUCTS_LIST_FAILURE,
  FETCH_PRODUCTS_LIST_SUCCESS,
  FETCH_PRODUCTS_LIST_FILTER_REQUEST,
  FETCH_PRODUCTS_LIST_FILTER_FAILURE,
  FETCH_PRODUCTS_LIST_FILTER_SUCCESS,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
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

//Для фильтра блока "Каталог" на страницах "/" и "/catalog.html"
export const fetchProductsListFilterRequest = (id) => ({
  type: FETCH_PRODUCTS_LIST_FILTER_REQUEST,
  payload: {
    id,
  },
});

export const fetchProductsListFilterFailure = (errorCatalog) => ({
  type: FETCH_PRODUCTS_LIST_FILTER_FAILURE,
  payload: {
    errorCatalog,
  },
});

export const fetchProductsListFilterSuccess = (products) => ({
  type: FETCH_PRODUCTS_LIST_FILTER_SUCCESS,
  payload: {
    products,
  },
});

//Для категорий фильтра блока "Каталог" на страницах "/" и "/catalog.html"
export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesFailure = (errorCategories) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: {
    errorCategories,
  },
});

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: {
    categories,
  },
});
