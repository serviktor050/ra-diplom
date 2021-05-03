import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import {
  FETCH_SALES_HITS_REQUEST,
  FETCH_PRODUCTS_LIST_REQUEST,
  FETCH_PRODUCTS_LIST_FILTER_REQUEST,
  FETCH_CATEGORIES_REQUEST,
  FETCH_DOWNLOAD_MORE_REQUEST,
  FETCH_DOWNLOAD_MORE_ALL_REQUEST,
  FETCH_SEARCH_PRODUCTS_LIST_REQUEST,
  FETCH_SEARCH_PRODUCTS_LIST_FILTER_REQUEST,
  FETCH_ALL_SEARCH_PRODUCTS_LIST_FILTER_REQUEST,
  // FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_REQUEST,
} from "../actions/actionTypes";
import {
  fetchSalesHitsFailure,
  fetchSalesHitsSuccess,
  fetchProductsListFailure,
  fetchProductsListSuccess,
  fetchProductsListFilterFailure,
  fetchProductsListFilterSuccess,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
  fetchDownloadMoreFailure,
  fetchDownloadMoreSuccess,
  fetchDownloadMoreAllFailure,
  fetchDownloadMoreAllSuccess,
  fetchSearchProductsListFailure,
  fetchSearchProductsListSuccess,
  fetchSearchProductsListFilterFailure,
  fetchSearchProductsListFilterSuccess,
  fetchAllSearchProductsListFilterFailure,
  fetchAllSearchProductsListFilterSuccess,
  // fetchDownloadMoreSearchResultsFailure,
  // fetchDownloadMoreSearchResultsSuccess,
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

//Для фильтра блока "Каталог" на страницах "/" и "/catalog.html"
export const fetchProductsListFilterEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_PRODUCTS_LIST_FILTER_REQUEST),
    map((o) => o.payload.id),
    switchMap((o) =>
      ajax
        .getJSON(
          `https://ra-diplom-server.herokuapp.com/api/items?categoryId=${o}`
        )
        .pipe(
          map((o) => fetchProductsListFilterSuccess(o)),
          catchError((e) => of(fetchProductsListFilterFailure(e)))
        )
    )
  );

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

//Для кнопки "Загрузить еще" (для отдельных категорий) на страницах "/" и "/catalog.html"
export const fetchDownloadMoreEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_DOWNLOAD_MORE_REQUEST),
    map((o) => o.payload),
    switchMap((o) =>
      ajax
        .getJSON(
          `https://ra-diplom-server.herokuapp.com/api/items?categoryId=${o.id}&offset=${o.length}`
        )
        .pipe(
          map((o) => fetchDownloadMoreSuccess(o)),
          catchError((e) => of(fetchDownloadMoreFailure(e)))
        )
    )
  );

//Для кнопки "Загрузить еще" (для всех категорий) на страницах "/" и "/catalog.html"
export const fetchDownloadMoreAllEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_DOWNLOAD_MORE_ALL_REQUEST),
    map((o) => o.payload),
    switchMap((o) =>
      ajax
        .getJSON(
          `https://ra-diplom-server.herokuapp.com/api/items?offset=${o.length}`
        )
        .pipe(
          map((o) => fetchDownloadMoreAllSuccess(o)),
          catchError((e) => of(fetchDownloadMoreAllFailure(e)))
        )
    )
  );

//Для загрузки каталога при заполненном поиске в хедере сайта
export const fetchSearchProductsListEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_SEARCH_PRODUCTS_LIST_REQUEST),
    map((o) => o.payload.search),
    switchMap((seacrh) =>
      ajax
        .getJSON(`https://ra-diplom-server.herokuapp.com/api/items?q=${seacrh}`)
        .pipe(
          map((o) => fetchSearchProductsListSuccess(o)),
          catchError((e) => of(fetchSearchProductsListFailure(e)))
        )
    )
  );

//Для фильтра блока "Каталог" на странице "/catalog.html" с результатами поиска
export const fetchSearchProductsListFilterEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_SEARCH_PRODUCTS_LIST_FILTER_REQUEST),
    map((o) => o.payload),
    switchMap((o) =>
      ajax
        .getJSON(
          `https://ra-diplom-server.herokuapp.com/api/items?categoryId=${o.id}&q=${o.searchRequest}`
        )
        .pipe(
          map((o) => fetchSearchProductsListFilterSuccess(o)),
          catchError((e) => of(fetchSearchProductsListFilterFailure(e)))
        )
    )
  );

//Для вкладки "Все" фильтра блока "Каталог" на странице "/catalog.html" с результатами поиска
export const fetchAllSearchProductsListFilterEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_ALL_SEARCH_PRODUCTS_LIST_FILTER_REQUEST),
    map((o) => o.payload),
    switchMap((o) =>
      ajax
        .getJSON(
          `https://ra-diplom-server.herokuapp.com/api/items?q=${o.searchRequest}`
        )
        .pipe(
          map((o) => fetchAllSearchProductsListFilterSuccess(o)),
          catchError((e) => of(fetchAllSearchProductsListFilterFailure(e)))
        )
    )
  );

// //Для кнопки "Загрузить еще" (для отдельных категорий) на странице "/catalog.html" для результатов поиска
// export const fetchDownloadMoreSearchResultsEpic = (action$) =>
//   action$.pipe(
//     ofType(FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_REQUEST),
//     map((o) => {
//       console.log(o);
//       return o.payload;
//     })
//     // switchMap((o) =>
//     //   ajax
//     //     .getJSON(
//     //       `https://ra-diplom-server.herokuapp.com/api/items?categoryId=${o.id}&offset=${o.length}`
//     //     )
//     //     .pipe(
//     //       map((o) => fetchDownloadMoreSearchResultsSuccess(o)),
//     //       catchError((e) => of(fetchDownloadMoreSearchResultsFailure(e)))
//     //     )
//     // )
//   );
