import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  placeAnOrderRequest,
  placeAnOrderInitialState,
} from "../redux/placeAnOrder/actions/actionCreators";
import Loader from "./Loader";
import { Link } from "react-router-dom";

export default function PlaceAnOrder() {
  const { productsList } = useSelector((state) => state.cartList);

  const { response, loading, error } = useSelector(
    (state) => state.placeAnOrder
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placeAnOrderInitialState());
  }, []);

  const [formField, setFormField] = useState({ phone: "", address: "" });

  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setFormField((prev) => ({ ...prev, [id]: value }));
  };

  const sendForm = () => {
    dispatch(
      placeAnOrderRequest({
        owner: {
          phone: formField.phone,
          address: formField.address,
        },
        items: productsList.map((product) => ({
          id: product.id,
          price: product.price,
          count: product.quantity,
        })),
      })
    );
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendForm();
  };

  return (
    <>
      {!loading && !error && response === null && (
        <section className="order">
          <h2 className="text-center">Оформить заказ</h2>
          <div className="card" maxwidth="30 rem" margin="0 auto">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  className="form-control"
                  id="phone"
                  placeholder="Ваш телефон"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input
                  className="form-control"
                  id="address"
                  placeholder="Адрес доставки"
                  onChange={handleChange}
                  required
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
      )}
      {loading && <Loader />}
      {!loading && response === 204 && (
        <>
          <div>
            <p>Ваш заказ успешно отправлен.</p>
            <p>
              Вы можете перейти на{" "}
              <Link
                to="/"
                onClick={() => {
                  dispatch(placeAnOrderInitialState());
                }}
              >
                главную страницу
              </Link>
              .
            </p>
          </div>
        </>
      )}
    </>
  );
}
