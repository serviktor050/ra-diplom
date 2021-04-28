import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  categories: [],
  loadingCategories: false,
  errorCategories: null,
};

export default function categoriesListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loadingCategories: true,
        errorCategories: null,
      };
    case FETCH_CATEGORIES_FAILURE:
      const { errorCategories } = action.payload;
      return {
        ...state,
        loadingCategories: false,
        errorCategories: errorCategories,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
        loadingCategories: false,
        errorCategories: null,
      };
    default:
      return state;
  }
}
