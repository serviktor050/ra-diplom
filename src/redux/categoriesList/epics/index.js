import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { FETCH_CATEGORIES_REQUEST } from "../actions/actionTypes";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "../actions/actionCreators";

//Для категорий фильтра блока "Каталог" на страницах "/" и "/catalog.html"
export const fetchCategoriesEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_CATEGORIES_REQUEST),
    switchMap(() =>
      ajax
        .getJSON(`https://ra-diplom-server.herokuapp.com/api/categories`)
        .pipe(
          map((o) => fetchCategoriesSuccess(o)),
          catchError((e) => of(fetchCategoriesFailure(e)))
        )
    )
  );
