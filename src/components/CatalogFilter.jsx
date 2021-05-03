import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProductsListRequest,
  fetchProductsListFilterRequest,
  fetchCategoriesRequest,
  fetchSearchProductsListFilterRequest,
  fetchAllSearchProductsListFilterRequest,
} from "./http/actions/actionCreators";

export default function CatalogFilter() {
  const { categories /*loadingCategories, errorCategories*/ } = useSelector(
    (state) => state.categoriesList
  );

  const { search } = useSelector((state) => state.productsList);

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

  const filterProducts = (evt) => {
    let id = evt.target.id;
    if (searchRequest !== "") {
      dispatch(fetchSearchProductsListFilterRequest(id, searchRequest));
    } else {
      dispatch(fetchProductsListFilterRequest(id));
    }
  };

  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="#" onClick={downloadAllProducts}>
          Все
        </Link>
      </li>
      <>
        {categories.map((category) => {
          return (
            <li className="nav-item" key={category.id}>
              <Link
                className="nav-link"
                to="#"
                id={category.id}
                onClick={filterProducts}
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

//Старый вариант (оставил на всякий случай)

{
  /* <li className="nav-item">
        <Link className="nav-link" to="#" onClick={filterProducts}>
          Женская обувь
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="#"
          onClick={filterProducts}
        >
          Мужская обувь
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#" onClick={filterProducts}>
          Обувь унисекс
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#" onClick={filterProducts}>
          Детская обувь
        </Link>
      </li> */
}
