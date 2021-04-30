import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsListRequest } from "./http/actions/actionCreators";
import Loader from "./Loader";
import ProductCardCatalog from "./ProductCardCatalog";
import CatalogFilter from "./CatalogFilter";
import ButtonDownloadMore from "./ButtonDownloadMore";

export default function CatalogComponent() {
  const {
    products,
    loadingCatalog,
    errorCatalog,
    buttonActive,
    search,
  } = useSelector((state) => state.productsList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (search !== "") {
      console.log("Проверка");
    } else {
      dispatch(fetchProductsListRequest());
    }
  }, []);

  return (
    <>
      {loadingCatalog && <Loader />}
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
