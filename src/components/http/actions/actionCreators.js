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
  FETCH_DOWNLOAD_MORE_REQUEST,
  FETCH_DOWNLOAD_MORE_FAILURE,
  FETCH_DOWNLOAD_MORE_SUCCESS,
  FETCH_DOWNLOAD_MORE_ALL_REQUEST,
  FETCH_DOWNLOAD_MORE_ALL_FAILURE,
  FETCH_DOWNLOAD_MORE_ALL_SUCCESS,
  CHANGE_SEARCH_FIELD,
  FETCH_SEARCH_PRODUCTS_LIST_REQUEST,
  FETCH_SEARCH_PRODUCTS_LIST_FAILURE,
  FETCH_SEARCH_PRODUCTS_LIST_SUCCESS,
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

//Для кнопки "Загрузить еще" (для отдельных категорий) на страницах "/" и "/catalog.html"
export const fetchDownloadMoreRequest = (id, length) => ({
  type: FETCH_DOWNLOAD_MORE_REQUEST,
  payload: {
    id,
    length,
  },
});

export const fetchDownloadMoreFailure = (errorDownload) => ({
  type: FETCH_DOWNLOAD_MORE_FAILURE,
  payload: {
    errorDownload,
  },
});

export const fetchDownloadMoreSuccess = (productsDownload) => ({
  type: FETCH_DOWNLOAD_MORE_SUCCESS,
  payload: {
    productsDownload,
  },
});

//Для кнопки "Загрузить еще" (для всех категорий) на страницах "/" и "/catalog.html"
export const fetchDownloadMoreAllRequest = (length) => ({
  type: FETCH_DOWNLOAD_MORE_ALL_REQUEST,
  payload: {
    length,
  },
});

export const fetchDownloadMoreAllFailure = (errorDownloadAllProducts) => ({
  type: FETCH_DOWNLOAD_MORE_ALL_FAILURE,
  payload: {
    errorDownloadAllProducts,
  },
});

export const fetchDownloadMoreAllSuccess = (productsDownloadAll) => ({
  type: FETCH_DOWNLOAD_MORE_ALL_SUCCESS,
  payload: {
    productsDownloadAll,
  },
});

export const changeSearchField = (search) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: {
    search,
  },
});

//Для загрузки каталога при заполненном поиске в хедере сайта
export const fetchSearchProductsListRequest = (search) => (
  console.log(search),
  {
    type: FETCH_SEARCH_PRODUCTS_LIST_REQUEST,
    payload: {
      search,
    },
  }
);

export const fetchSearchProductsListFailure = (errorSearchCatalog) => ({
  type: FETCH_SEARCH_PRODUCTS_LIST_FAILURE,
  payload: {
    errorSearchCatalog,
  },
});

export const fetchSearchProductsListSuccess = (searchProducts) => ({
  type: FETCH_SEARCH_PRODUCTS_LIST_SUCCESS,
  payload: {
    searchProducts,
  },
});
