import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { FETCH_PRODUCT_CARD_REQUEST } from "../actions/actionTypes";
import {
  fetchProductCardFailure,
  fetchProductCardSuccess,
} from "../actions/actionsCreators";

//Для наполнения карточки товара
export const fetchProductCardEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_PRODUCT_CARD_REQUEST),
    map((o) => o.payload.id),
    switchMap((id) =>
      ajax
        .getJSON(`https://ra-diplom-server.herokuapp.com/api/items/${id}`)
        .pipe(
          map((o) => fetchProductCardSuccess(o)),
          catchError((e) => of(fetchProductCardFailure(e)))
        )
    )
  );
