// import { ofType } from "redux-observable";
// import { ajax } from "rxjs/ajax";
// import { map, switchMap, catchError } from "rxjs/operators";
// import { of } from "rxjs";
// import {
//   // FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_REQUEST,
// } from "../actions/actionTypes";
// import {
//   // fetchDownloadMoreSearchResultsFailure,
//   // fetchDownloadMoreSearchResultsSuccess,
// } from "../actions/actionCreators";

// // //Для кнопки "Загрузить еще" (для отдельных категорий) на странице "/catalog.html" для результатов поиска
// // export const fetchDownloadMoreSearchResultsEpic = (action$) =>
// //   action$.pipe(
// //     ofType(FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_REQUEST),
// //     map((o) => {
// //       console.log(o);
// //       return o.payload;
// //     })
// //     // switchMap((o) =>
// //     //   ajax
// //     //     .getJSON(
// //     //       `https://ra-diplom-server.herokuapp.com/api/items?categoryId=${o.id}&offset=${o.length}`
// //     //     )
// //     //     .pipe(
// //     //       map((o) => fetchDownloadMoreSearchResultsSuccess(o)),
// //     //       catchError((e) => of(fetchDownloadMoreSearchResultsFailure(e)))
// //     //     )
// //     // )
// //   );
