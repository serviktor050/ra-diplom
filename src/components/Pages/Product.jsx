import React, { useEffect } from "react";
import Banner from "../Banner";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductCardRequest } from "../../redux/productCard/actions/actionsCreators";
import Loader from "../Loader";

export default function Product(props) {
  let id = Number(props.match.params.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCardRequest(id));
  }, []);

  const { items, errorCard, loadingCard } = useSelector(
    (state) => state.productCard
  );

  return (
    <>
      {loadingCard && <Loader />}
      {!loadingCard && !errorCard && (
        <main className="container">
          <div className="row">
            <div className="col">
              <Banner />
              <section className="catalog-item">
                <h2 className="text-center">{items.title}</h2>
                <div className="row">
                  <div className="col-5">
                    <img
                      src={`${items.images[0]}`}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Артикул</td>
                          <td>{items.sku}</td>
                        </tr>
                        <tr>
                          <td>Производитель</td>
                          <td>{items.manufacturer}</td>
                        </tr>
                        <tr>
                          <td>Цвет</td>
                          <td>{items.color}</td>
                        </tr>
                        <tr>
                          <td>Материалы</td>
                          <td>{items.material}</td>
                        </tr>
                        <tr>
                          <td>Сезон</td>
                          <td>{items.season}</td>
                        </tr>
                        <tr>
                          <td>Повод</td>
                          <td>{items.reason}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-center">
                      <p>
                        Размеры в наличии:
                        <span className="catalog-item-size selected">
                          18 US
                        </span>
                        <span className="catalog-item-size">20 US</span>
                      </p>
                      <p>
                        Количество:
                        <span className="btn-group btn-group-sm pl-2">
                          <button className="btn btn-secondary">-</button>
                          <span className="btn btn-outline-primary">1</span>
                          <button className="btn btn-secondary">+</button>
                        </span>
                      </p>
                    </div>
                    <button className="btn btn-danger btn-block btn-lg">
                      В корзину
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
