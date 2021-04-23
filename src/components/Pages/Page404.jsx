import React from "react";
import Banner from "../Banner";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <main class="container">
      <div class="row">
        <div class="col">
          <Banner />
          <section class="top-sales">
            <h2 class="text-center">Страница не найдена</h2>
            <p>Извините, такая страница не найдена!</p>
            <p>
              Вы можете перейти на <Link to="/">главную страницу</Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
