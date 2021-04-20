import React from "react";

export default function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <section>
            <h5>Информация</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="/about.html" className="nav-link">
                  О магазине
                </a>
              </li>
              <li className="nav-item">
                <a href="/catalog.html" className="nav-link">
                  Каталог
                </a>
              </li>
              <li className="nav-item">
                <a href="/contacts.html" className="nav-link">
                  Контакты
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div class="col">
          <section>
            <h5>Принимаем к оплате:</h5>
            <div class="footer-pay">
              <div class="footer-pay-systems footer-pay-systems-paypal"></div>
              <div class="footer-pay-systems footer-pay-systems-master-card"></div>
              <div class="footer-pay-systems footer-pay-systems-visa"></div>
              <div class="footer-pay-systems footer-pay-systems-yandex"></div>
              <div class="footer-pay-systems footer-pay-systems-webmoney"></div>
              <div class="footer-pay-systems footer-pay-systems-qiwi"></div>
            </div>
          </section>
          <section>
            <div class="footer-copyright">
              2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
              аксессуаров. Все права защищены. Доставка по всей России!
            </div>
          </section>
        </div>
        <div class="col text-right">
          <section class="footer-contacts">
            <h5>Контакты:</h5>
            <a class="footer-contacts-phone" href="tel:+7-495-790-35-03">
              +7 495 79 03 5 03
            </a>
            <span class="footer-contacts-working-hours">
              Ежедневно: с 09-00 до 21-00
            </span>
            <a class="footer-contacts-email" href="mailto:office@bosanoga.ru">
              office@bosanoga.ru
            </a>
            <div class="footer-social-links">
              <div class="footer-social-link footer-social-link-twitter"></div>
              <div class="footer-social-link footer-social-link-vk"></div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
