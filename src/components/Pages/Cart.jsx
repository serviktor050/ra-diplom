import React, { useEffect } from "react";
import Banner from "../Banner";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductsInCart,
  removeProductInCart,
} from "../../redux/cartList/actions/actionsCreators";
import PlaceAnOrder from "../PlaceAnOrder";

export default function Cart() {
  const dispatch = useDispatch();

  const { productsList } = useSelector((state) => state.cartList);

  useEffect(() => {
    dispatch(addProductsInCart(productsList));
  }, [dispatch, productsList]);

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
            {productsList && productsList.length === 0 && (
              <p>Ваша корзина пуста... 🙄</p>
            )}
            {productsList === null && <p>Ваша корзина пуста... 🙄</p>}
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
                          <a href={`/catalog/${product.id}.html`}>
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
                              dispatch(
                                removeProductInCart(
                                  `${product.id}${product.size}`
                                )
                              );
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
          <PlaceAnOrder />
        </div>
      </div>
    </main>
  );
}
