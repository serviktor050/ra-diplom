import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsListRequest } from "./http/actions/actionCreators";
import Loader from "./Loader";
import ProductCardCatalog from "./ProductCardCatalog";
import CatalogFilter from "./CatalogFilter";
import ButtonDownloadMore from "./ButtonDownloadMore";

export default function CatalogComponent() {
  const { products, loadingCatalog, errorCatalog } = useSelector(
    (state) => state.productsList
  );
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(fetchProductsListRequest());
  }, []);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CatalogFilter />
      <div className="row">
        {loadingCatalog && <Loader />}
        {!loadingCatalog && !errorCatalog && (
          <>
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
          </>
        )}
      </div>
      <ButtonDownloadMore />
    </section>
  );
}
