import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { FETCH_SALES_HITS_REQUEST } from "../actions/actionTypes";
import {
  fetchSalesHitsFailure,
  fetchSalesHitsSuccess,
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
