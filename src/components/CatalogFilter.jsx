import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategoriesRequest } from "../redux/categoriesList/actions/actionCreators";
import {
  fetchProductsListRequest,
  fetchProductsListFilterRequest,
  fetchSearchProductsListFilterRequest,
  fetchAllSearchProductsListFilterRequest,
} from "../redux/productsList/actions/actionsCreators";

export default function CatalogFilter() {
  const { categories /*loadingCategories, errorCategories*/ } = useSelector(
    (state) => state.categoriesList
  );

  const { search, selectedCategory } = useSelector(
    (state) => state.productsList
  );

  const isAllActive = selectedCategory === 0;
  let searchRequest = search;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, []);

  const downloadAllProducts = () => {
    if (searchRequest !== "") {
      dispatch(fetchAllSearchProductsListFilterRequest(searchRequest));
    } else {
      dispatch(fetchProductsListRequest());
    }
  };

  const filterProducts = (id) => {
    if (searchRequest !== "") {
      dispatch(fetchSearchProductsListFilterRequest(id, searchRequest));
    } else {
      dispatch(fetchProductsListFilterRequest(id));
    }
  };

  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <Link
          className={`nav-link ${isAllActive ? "nav-link-is-active" : ""}`}
          to="#"
          onClick={downloadAllProducts}
        >
          Все
        </Link>
      </li>
      <>
        {categories.map((category) => {
          const isActiveCaterory = category.id === selectedCategory;
          return (
            <li className="nav-item" key={category.id}>
              <Link
                className={`nav-link ${
                  isActiveCaterory ? "nav-link-is-active" : ""
                }`}
                to="#"
                onClick={() => {
                  filterProducts(category.id);
                }}
              >
                {category.title}
              </Link>
            </li>
          );
        })}
      </>
    </ul>
  );
}
