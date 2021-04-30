import {
  FETCH_PRODUCTS_LIST_REQUEST,
  FETCH_PRODUCTS_LIST_FAILURE,
  FETCH_PRODUCTS_LIST_SUCCESS,
  FETCH_PRODUCTS_LIST_FILTER_REQUEST,
  FETCH_PRODUCTS_LIST_FILTER_FAILURE,
  FETCH_PRODUCTS_LIST_FILTER_SUCCESS,
  FETCH_DOWNLOAD_MORE_REQUEST,
  FETCH_DOWNLOAD_MORE_FAILURE,
  FETCH_DOWNLOAD_MORE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  products: [],
  category: null,
  loadingCatalog: false,
  errorCatalog: null,
  loadingDownloadMore: false,
  errorDownloadMore: null,
  buttonActive: true,
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
        category: action.payload.products[0].category,
        buttonActive: true,
      };

    //Для кнопки "Загрузить еще" (для отдельных категорий) на страницах "/" и "/catalog.html"
    case FETCH_DOWNLOAD_MORE_REQUEST:
      return {
        ...state,
        loadingDownloadMore: true,
        errorDownloadMore: null,
      };
    case FETCH_DOWNLOAD_MORE_FAILURE:
      return {
        ...state,
        loadingDownloadMore: false,
        errorDownloadMore: action.payload.errorDownloadMore,
      };
    case FETCH_DOWNLOAD_MORE_SUCCESS:
      const { productsDownload } = action.payload;
      if (productsDownload.length < 6 || productsDownload.length === 0) {
        return {
          ...state,
          products: [...state.products, ...productsDownload],
          loadingDownloadMore: false,
          errorDownloadMore: null,
          buttonActive: false,
        };
      } else {
        return {
          ...state,
          products: [...state.products, ...productsDownload],
          loadingDownloadMore: false,
          errorDownloadMore: null,
          buttonActive: true,
        };
      }
    default:
      return state;
  }
}
