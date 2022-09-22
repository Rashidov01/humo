import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="site-hero container">
        <h1 className="site-hero__title">Humo touroperator</h1>
        <p className="site-hero__text">ПУТЕШЕСТВИЕ В КОРОЛЕВСТВО САУДИИ</p>
        <ul className="social">
          <li className="social__item">
            <Link href="#">
              <a className="social__link">
                <i class="social__icon bx bxl-telegram"></i>
              </a>
            </Link>
          </li>
          <li className="social__item">
            <Link href="#">
              <a className="social__link">
                <i class="social__icon bx bxl-instagram"></i>
              </a>
            </Link>
          </li>
          <li className="social__item">
            <Link href="#">
              <a className="social__link">
                <i class="social__icon bx bxl-facebook"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
