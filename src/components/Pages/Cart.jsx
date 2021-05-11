import React, { useEffect } from "react";
import Banner from "../Banner";
import { removeProduct, getProductsList } from "../../utils/cartStorage";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductInCart,
  removeProductInCart,
} from "../../redux/cartList/actions/actionsCreators";

export default function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addProductInCart(getProductsList()));
  }, []);

  const { productsList } = useSelector((state) => state.cartList);

  let totalPrice;

  if (productsList) {
    totalPrice = productsList.reduce((sum, product) => {
      return sum + product.price * product.quantity;
    }, 0);
  }

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <section className="cart">
            <h2 className="text-center">Корзина</h2>
            {productsList && productsList.length !== 0 && (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Размер</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Итого</th>
                    <th scope="col">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {productsList.map((product, index) => {
                    return (
                      <tr>
                        <th scope="row">{(index += 1)}</th>
                        <td>
                          <a href={`/products/${product.id}.html`}>
                            {product.title}
                          </a>
                        </td>
                        <td>{product.size}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price} руб.</td>
                        <td>{product.price * product.quantity} руб.</td>
                        <td>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => {
                              removeProduct(`${product.id}${product.size}`);
                              dispatch(removeProductInCart(product.id));
                            }}
                          >
                            Удалить
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td colSpan="5" className="text-right">
                      Общая стоимость
                    </td>
                    {totalPrice !== undefined && <td>{totalPrice} руб.</td>}
                  </tr>
                </tbody>
              </table>
            )}
          </section>
          <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card" maxwidth="30 rem" margin="0 auto">
              <form className="card-body">
                <div className="form-group">
                  <label htmlFor="phone">Телефон</label>
                  <input
                    className="form-control"
                    id="phone"
                    placeholder="Ваш телефон"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Адрес доставки</label>
                  <input
                    className="form-control"
                    id="address"
                    placeholder="Адрес доставки"
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreement"
                  />
                  <label className="form-check-label" htmlFor="agreement">
                    Согласен с правилами доставки
                  </label>
                </div>
                <button type="submit" className="btn btn-outline-secondary">
                  Оформить
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
