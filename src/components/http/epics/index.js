import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import {
  FETCH_SALES_HITS_REQUEST,
  FETCH_PRODUCTS_LIST_REQUEST,
} from "../actions/actionTypes";
import {
  fetchSalesHitsFailure,
  fetchSalesHitsSuccess,
  fetchProductsListFailure,
  fetchProductsListSuccess,
} from "../actions/actionCreators";

//Для блока "Хиты продаж" на странице "/"
export const fetchSalesHitsEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_SALES_HITS_REQUEST),
    switchMap(() =>
      ajax.getJSON(`https://ra-diplom-server.herokuapp.com/api/top-sales`).pipe(
        map((o) => fetchSalesHitsSuccess(o)),
        catchError((e) => of(fetchSalesHitsFailure(e)))
      )
    )
  );

//Для блока "Каталог" на страницах "/" и "/catalog.html"
export const fetchProductsListEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_PRODUCTS_LIST_REQUEST),
    switchMap(() =>
      ajax.getJSON(`https://ra-diplom-server.herokuapp.com/api/items`).pipe(
        map((o) => fetchProductsListSuccess(o)),
        catchError((e) => of(fetchProductsListFailure(e)))
      )
    )
  );
