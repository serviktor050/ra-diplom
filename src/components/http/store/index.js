import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import salesHitsListReducer from "../reducers/salesHitsList";
import productsListReducer from "../reducers/productsList";
import { fetchSalesHitsEpic, fetchProductsListEpic } from "../epics/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  salesHitsList: salesHitsListReducer,
  productsList: productsListReducer,
});

const epic = combineEpics(fetchSalesHitsEpic, fetchProductsListEpic);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export default store;
