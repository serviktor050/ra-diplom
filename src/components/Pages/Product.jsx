import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductCardRequest } from "../../redux/productCard/actions/actionsCreators";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import cartStorage from "../../utils/cartStorage";
import { addProduct } from "../../redux/cartList/actions/actionsCreators";

export default function Product(props) {
  let id = Number(props.match.params.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCardRequest(id));
  }, [dispatch, id]);

  const { items, errorCard, loadingCard } = useSelector(
    (state) => state.productCard
  );

  //Выбор размера
  const [selectedSize, setSelectedSize] = useState("");

  const handleSize = (size) => {
    setSelectedSize(size);
  };

  //Выбор количества
  const [quantity, setQuantity] = useState(1);

  const reduceQuantity = (quantity) => {
    if (quantity > 1) {
      quantity -= 1;
      setQuantity(quantity);
    } else {
      return;
    }
  };

  const increaseQuantity = (quantity) => {
    if (quantity < 10) {
      quantity += 1;
      setQuantity(quantity);
    } else {
      return;
    }
  };

  //Добавление товара в корзину
  let product = {
    id: items.id,
    title: items.title,
    size: selectedSize,
    price: items.price,
    quantity: quantity,
  };

  const addProductInStorage = () => {
    cartStorage(product);
  };

  return (
    <>
      {loadingCard && <Loader />}
      {!loadingCard && !errorCard && items.length !== 0 && (
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
                        {items.sizes
                          .filter((o) => {
                            return o.avalible === true;
                          })
                          .map((o) => {
                            const isActive = o.size === selectedSize;
                            return (
                              <span
                                className={`catalog-item-size ${
                                  isActive ? "selected" : ""
                                }`}
                                onClick={() => {
                                  handleSize(o.size);
                                }}
                              >
                                {o.size}
                              </span>
                            );
                          })}
                      </p>
                      {items.sizes !== 0 && (
                        <p>
                          Количество:
                          <span className="btn-group btn-group-sm pl-2">
                            <button
                              className="btn btn-secondary"
                              onClick={() => {
                                reduceQuantity(quantity);
                              }}
                            >
                              -
                            </button>
                            <span className="btn btn-outline-primary">
                              {quantity}
                            </span>
                            <button
                              className="btn btn-secondary"
                              onClick={() => {
                                increaseQuantity(quantity);
                              }}
                            >
                              +
                            </button>
                          </span>
                        </p>
                      )}
                    </div>
                    {items.sizes !== 0 && selectedSize !== "" && (
                      <Link to="/cart.html">
                        <button
                          className="btn btn-danger btn-block btn-lg"
                          onClick={() => {
                            dispatch(addProduct(product));
                            addProductInStorage();
                          }}
                        >
                          В корзину
                        </button>
                      </Link>
                    )}
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
