import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
} from "./actionTypes";

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
