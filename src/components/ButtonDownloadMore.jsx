import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDownloadMoreRequest,
  fetchDownloadMoreAllRequest,
  fetchDownloadMoreSearchResultsRequest,
  fetchAllDownloadMoreSearchResultsRequest,
} from "../redux/productsList/actions/actionsCreators";

export default function ButtonDownloadMore() {
  const {
    products,
    /*loadingCatalog, errorCatalog,*/ category,
    search,
  } = useSelector((state) => state.productsList);

  let id = category;
  let length = products.length;
  let searchString = search;

  const dispatch = useDispatch();

  const downloadMore = () => {
    if (id !== null && searchString !== "") {
      dispatch(fetchDownloadMoreSearchResultsRequest(id, length, searchString));
    } else if (id !== null) {
      dispatch(fetchDownloadMoreRequest(id, length));
    } else if (id === null) {
      if (searchString !== "") {
        dispatch(
          fetchAllDownloadMoreSearchResultsRequest(length, searchString)
        );
      } else {
        dispatch(fetchDownloadMoreAllRequest(length));
      }
    }
  };

  return (
    <div className="text-center">
      <button className="btn btn-outline-primary" onClick={downloadMore}>
        Загрузить ещё
      </button>
    </div>
  );
}
