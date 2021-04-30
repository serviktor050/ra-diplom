import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDownloadMoreRequest,
  fetchDownloadMoreAllRequest,
} from "./http/actions/actionCreators";

export default function ButtonDownloadMore() {
  const { products, /*loadingCatalog, errorCatalog,*/ category } = useSelector(
    (state) => state.productsList
  );

  let id = category;
  let length = products.length;

  const dispatch = useDispatch();

  const downloadMore = () => {
    if (id !== null) {
      dispatch(fetchDownloadMoreRequest(id, length));
    } else {
      dispatch(fetchDownloadMoreAllRequest(length));
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
