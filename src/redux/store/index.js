import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import salesHitsListReducer from "../salesHitsList/reducers/salesHitsList";
import productsListReducer from "../productsList/reducers/productsList";
import categoriesListReducer from "../categoriesList/reducers/categoriesList";
import productCardReducer from "../productCard/reducers/productCard";
import { fetchCategoriesEpic } from "../categoriesList/epics/index";
import { fetchSalesHitsEpic } from "../salesHitsList/epics/index";
import { fetchProductCardEpic } from "../productCard/epics/index";

import {
  fetchProductsListEpic,
  fetchProductsListFilterEpic,
  fetchDownloadMoreEpic,
  fetchDownloadMoreAllEpic,
  fetchSearchProductsListEpic,
  fetchSearchProductsListFilterEpic,
  fetchAllSearchProductsListFilterEpic,
  fetchDownloadMoreSearchResultsEpic,
  fetchAllDownloadMoreSearchResultsEpic,
} from "../productsList/epics/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  salesHitsList: salesHitsListReducer,
  productsList: productsListReducer,
  categoriesList: categoriesListReducer,
  productCard: productCardReducer,
});

const epic = combineEpics(
  fetchSalesHitsEpic,
  fetchProductsListEpic,
  fetchProductsListFilterEpic,
  fetchCategoriesEpic,
  fetchDownloadMoreEpic,
  fetchDownloadMoreAllEpic,
  fetchSearchProductsListEpic,
  fetchSearchProductsListFilterEpic,
  fetchAllSearchProductsListFilterEpic,
  fetchDownloadMoreSearchResultsEpic,
  fetchAllDownloadMoreSearchResultsEpic,
  fetchProductCardEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export default store;
