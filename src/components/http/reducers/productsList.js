// import {

//   // FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_REQUEST,
//   // FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_FAILURE,
//   // FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_SUCCESS,
// } from "../../../components/http/actions/actionTypes";

//     // //Для кнопки "Загрузить еще" (для отдельных категорий) на странице "/catalog.html" для результатов поиска
//     // case FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_REQUEST:
//     //   return {
//     //     ...state,
//     //     loadingDownloadMore: true,
//     //     errorDownloadMore: null,
//     //   };
//     // case FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_FAILURE:
//     //   return {
//     //     ...state,
//     //     loadingDownloadMore: false,
//     //     errorDownloadMore: action.payload.errorSearchDownload,
//     //   };
//     // case FETCH_DOWNLOAD_MORE_SEARCH_RESULTS_SUCCESS:
//     //   const { productsSearchDownload } = action.payload;
//     //   if (
//     //     productsSearchDownload.length < 6 ||
//     //     productsSearchDownload.length === 0
//     //   ) {
//     //     return {
//     //       ...state,
//     //       products: [...state.products, ...productsSearchDownload],
//     //       loadingDownloadMore: false,
//     //       errorDownloadMore: null,
//     //       buttonActive: false,
//     //     };
//     //   } else {
//     //     return {
//     //       ...state,
//     //       products: [...state.products, ...productsSearchDownload],
//     //       loadingDownloadMore: false,
//     //       errorDownloadMore: null,
//     //       buttonActive: true,
//     //     };
//     //   }
