import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSalesHitsRequest } from "../redux/salesHitsList/actions/actionCreators";
import Loader from "./Loader";
import ProductCardSalesHits from "./ProductCardSalesHits";

export default function SalesHits() {
  const { items, loading, error } = useSelector((state) => state.salesHitsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSalesHitsRequest());
  }, []);

  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="row">
          {loading && <Loader />}
          {!loading && error && (
            <div>
              <p>
                Произошла ошибка при загрузке данных. Вы можете повторить
                запрос.
              </p>
              <button
                onClick={() => {
                  dispatch(fetchSalesHitsRequest());
                }}
              >
                Повторить запрос
              </button>
            </div>
          )}
          {!loading && !error && (
            <>
              {items.map((item) => {
                return (
                  <ProductCardSalesHits
                    key={item.id}
                    id={item.id}
                    category={item.category}
                    title={item.title}
                    images={item.images}
                    price={item.price}
                  />
                );
              })}
            </>
          )}
        </div>
      </section>
    </>
  );
}
