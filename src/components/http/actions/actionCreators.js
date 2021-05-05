// import
// // FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_REQUEST,
// // FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_FAILURE,
// // FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_SUCCESS,
// "./actionTypes";

// //Для кнопки "Загрузить еще" (для отдельных категорий) на странице "/catalog.html" для результатов поиска
// export const fetchDownloadMoreSearchResultsRequest = (
//   id,
//   length,
//   searchString
// ) => (
//   console.log(searchString),
//   {
//     type: FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_REQUEST,
//     payload: {
//       id,
//       length,
//       searchString,
//     },
//   }
// );

// export const fetchDownloadMoreSearchResultsFailure = (errorSearchDownload) => ({
//   type: FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_FAILURE,
//   payload: {
//     errorSearchDownload,
//   },
// });

// export const fetchDownloadMoreSearchResultsSuccess = (
//   productsSearchDownload
// ) => ({
//   type: FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_SUCCESS,
//   payload: {
//     productsSearchDownload,
//   },
// });
