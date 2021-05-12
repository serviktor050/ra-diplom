import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductsListRequest,
  fetchSearchProductsListRequest,
} from "../redux/productsList/actions/actionsCreators";
import Loader from "./Loader";
import ProductCardCatalog from "./ProductCardCatalog";
import CatalogFilter from "./CatalogFilter";
import ButtonDownloadMore from "./ButtonDownloadMore";

export default function CatalogComponent() {
  const { products, loadingCatalog, errorCatalog, buttonActive, search } =
    useSelector((state) => state.productsList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (search !== "") {
      dispatch(fetchSearchProductsListRequest(search));
    } else {
      dispatch(fetchProductsListRequest());
    }
  }, [dispatch, search]);

  return (
    <>
      {loadingCatalog && <Loader />}
      {!loadingCatalog && errorCatalog && search !== "" && (
        <div>
          <p>
            Произошла ошибка при загрузке данных. Вы можете повторить запрос.
          </p>
          <button
            onClick={() => {
              dispatch(fetchSearchProductsListRequest(search));
            }}
          >
            Повторить запрос
          </button>
        </div>
      )}
      {!loadingCatalog && errorCatalog && search === "" && (
        <div>
          <p>
            Произошла ошибка при загрузке данных. Вы можете повторить запрос.
          </p>
          <button
            onClick={() => {
              dispatch(fetchProductsListRequest());
            }}
          >
            Повторить запрос
          </button>
        </div>
      )}
      {!loadingCatalog && !errorCatalog && (
        <>
          <CatalogFilter />
          <div className="row">
            {products.map((product) => {
              return (
                <ProductCardCatalog
                  key={product.id}
                  id={product.id}
                  category={product.category}
                  title={product.title}
                  images={product.images}
                  price={product.price}
                />
              );
            })}
          </div>
          {buttonActive && <ButtonDownloadMore />}
        </>
      )}
    </>
  );
}
