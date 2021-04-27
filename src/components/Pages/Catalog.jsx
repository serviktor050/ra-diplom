import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsListRequest } from "../http/actions/actionCreators";
import Loader from "../Loader";
import Banner from "../Banner";
import ProductCardCatalog from "../ProductCardCatalog";
import CatalogFilter from "../CatalogFilter";
import ButtonDownloadMore from "../ButtonDownloadMore";

export default function Catalog() {
  const { products, loadingCatalog, errorCatalog } = useSelector(
    (state) => state.productsList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsListRequest());
  }, []);

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <form className="catalog-search-form form-inline">
              <input className="form-control" placeholder="Поиск" />
            </form>
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
        </div>
      </div>
    </main>
  );
}
