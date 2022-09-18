import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="site-hero container">
        <h1 className="site-hero__title">Humo tour</h1>
        <p className="site-hero__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          officiis impedit atque enim pariatur quo quae ducimus vitae quod
          magni?
        </p>
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
