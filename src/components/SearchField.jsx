import React from "react";
import { useSelector } from "react-redux";

export default function SearchField() {
  const { search } = useSelector((state) => state.productsList);
  return (
    <>
      {search ? (
        <form className="catalog-search-form form-inline">
          <input
            className="form-control"
            placeholder="Поиск"
            value={`${search}`}
          />
        </form>
      ) : (
        <form className="catalog-search-form form-inline">
          <input className="form-control" placeholder="Поиск" />
        </form>
      )}
    </>
  );
}
