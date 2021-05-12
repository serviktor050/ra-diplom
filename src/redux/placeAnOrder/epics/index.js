import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { PLACE_AN_ORDER_REQUEST } from "../actions/actionTypes";
import {
  placeAnOrderFailure,
  placeAnOrderSuccess,
} from "../../placeAnOrder/actions/actionCreators";

//Для наполнения карточки товара
export const placeAnOrderEpic = (action$) =>
  action$.pipe(
    ofType(PLACE_AN_ORDER_REQUEST),
    map((o) => o.payload.form),
    switchMap((form) => {
      return ajax({
        url: "https://ra-diplom-server.herokuapp.com/api/order",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).pipe(
        map((o) => placeAnOrderSuccess(o.status)),
        catchError((e) => of(placeAnOrderFailure(e)))
      );
    })
  );
